import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "メール送信の設定がされていません" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "DEFINE X <noreply@definex.jp>",
        to: "info@definex.jp",
        subject: subject || `お問い合わせ: ${name}様より`,
        reply_to: email,
        html: `
          <h2>お問い合わせ内容</h2>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>件名:</strong> ${subject || "なし"}</p>
          <hr />
          <h3>メッセージ:</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 }
      );
    }

    // Send auto-reply to the user
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "DEFINE X <noreply@definex.jp>",
        to: email,
        subject: "【DEFINE X】お問い合わせを受け付けました",
        html: `
          <p>お問い合わせを受け付けました。</p>
          <p>担当者より <strong>48時間以内</strong> にご返信いたします。</p>
          <p>恐れ入りますが、しばらくお待ちくださいますようお願いいたします。</p>
          <p>─────────────</p>
          <p>DEFINEX株式会社</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
