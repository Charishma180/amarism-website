import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const allowedAmounts = new Set([99, 199, 299, 499, 999, 1499, 1999, 2499, 2999, 4999]);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID ?? process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    const donationAmount = Number(amount);

    if (!allowedAmounts.has(donationAmount)) {
      return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 });
    }

    if (!process.env.RAZORPAY_KEY_SECRET || !(process.env.RAZORPAY_KEY_ID ?? process.env.NEXT_PUBLIC_RAZORPAY_KEY)) {
      return NextResponse.json({ error: "Payment gateway is not configured" }, { status: 503 });
    }

    const order = await razorpay.orders.create({
      amount: donationAmount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { purpose: "AMARISM Patron Donation" },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay order error:", error);

    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
