import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { orderId, paymentId, signature } = await req.json();

    if (!orderId || !paymentId || !signature || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Invalid payment verification request" }, { status: 400 });
    }

    const expectedSignature = createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const isValid =
      expectedSignature.length === signature.length &&
      timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(signature));

    if (!isValid) {
      return NextResponse.json({ error: "Payment signature verification failed" }, { status: 400 });
    }

    return NextResponse.json({ verified: true });
  } catch {
    return NextResponse.json({ error: "Unable to verify payment" }, { status: 500 });
  }
}
