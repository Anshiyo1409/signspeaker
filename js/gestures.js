export function getGifForText(text) {
  text = text.toLowerCase();

  if (text.includes("happy")) return "assets/happy.gif";
  if (text.includes("yes")) return "assets/Yes.gif";
  if (text.includes("no")) return "assets/no.gif";
  if (text.includes("thank you")) return "assets/Thankyou.gif";
  if (text.includes("sorry")) return "assets/sorry.gif";
  if (text.includes("how are you")) return "assets/howareyou.gif";
  return "default.gif";
}
