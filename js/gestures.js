export function getGifForText(text) {
  const cleaned = text.toLowerCase().replace(/[.,!?]/g, "").trim();

  if (cleaned.includes("happy")) return "assets/happy.gif";
  if (cleaned.includes("yes")) return "assets/Yes.gif";
  if (cleaned.includes("no")) return "assets/no.gif";
  if (cleaned.includes("thank you")) return "assets/Thankyou.gif";
  if (cleaned.includes("sorry")) return "assets/sorry.gif";
  if (cleaned.includes("how are you")) return "assets/howareyou.gif";

  return "assets/no.gif";
}
