import {
  Bebas_Neue,
  Ubuntu_Condensed,
  Rajdhani,
  Odibee_Sans,
} from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const ubuntuCond = Ubuntu_Condensed({ subsets: ["latin"], weight: ["400"] });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const odibee = Odibee_Sans({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export { bebasNeue, ubuntuCond, rajdhani, odibee };
