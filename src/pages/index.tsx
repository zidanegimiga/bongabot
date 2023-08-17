import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/shared/Nav";
import { amaranth, bebas } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

interface IRghtArrow {
  fill: boolean
}

const RightArrow = ({ fill }: IRghtArrow) => {
  if (fill) {
    return (
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 12C1.5 14.0767 2.11581 16.1068 3.26957 17.8335C4.42332 19.5602 6.0632 20.906 7.98182 21.7007C9.90045 22.4955 12.0116 22.7034 14.0484 22.2982C16.0852 21.8931 17.9562 20.8931 19.4246 19.4246C20.8931 17.9562 21.8931 16.0852 22.2982 14.0484C22.7034 12.0116 22.4955 9.90045 21.7007 7.98182C20.906 6.0632 19.5602 4.42332 17.8335 3.26957C16.1068 2.11581 14.0767 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12ZM6 11.25H15.1125L10.9275 7.04475L12 6L18 12L12 18L10.9275 16.9298L15.1125 12.75H6V11.25Z"
            fill="white"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2922 6L11.2197 7.04475L15.4047 11.25H6.29224V12.75H15.4047L11.2197 16.9298L12.2922 18L18.2922 12L12.2922 6Z"
            fill="black"
          />
          <path
            d="M12.2922 22.5C10.2155 22.5 8.18547 21.8842 6.45875 20.7304C4.73204 19.5767 3.38623 17.9368 2.59151 16.0182C1.79679 14.0996 1.58885 11.9884 1.994 9.95156C2.39914 7.91476 3.39917 6.04383 4.86762 4.57538C6.33607 3.10693 8.20699 2.1069 10.2438 1.70176C12.2806 1.29661 14.3918 1.50455 16.3104 2.29927C18.229 3.09399 19.8689 4.4398 21.0227 6.16652C22.1764 7.89323 22.7922 9.9233 22.7922 12C22.7891 14.7838 21.6818 17.4527 19.7134 19.4211C17.7449 21.3896 15.076 22.4968 12.2922 22.5ZM12.2922 3C10.5122 3 8.77215 3.52785 7.29211 4.51678C5.81207 5.50571 4.65851 6.91132 3.97733 8.55585C3.29614 10.2004 3.11791 12.01 3.46517 13.7558C3.81244 15.5016 4.66961 17.1053 5.92828 18.364C7.18695 19.6226 8.7906 20.4798 10.5364 20.8271C12.2823 21.1743 14.0919 20.9961 15.7364 20.3149C17.3809 19.6337 18.7865 18.4802 19.7755 17.0001C20.7644 15.5201 21.2922 13.78 21.2922 12C21.2895 9.61391 20.3404 7.32634 18.6531 5.63911C16.9659 3.95189 14.6783 3.00278 12.2922 3Z"
            fill="black"
          />
        </svg>
      </div>
    );
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Bongabot.AI</title>
        <meta name="description" content="Bongabot artificial intekligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Nav />
        <div className={styles.leftMainContainer}>
          <div className={styles.leftMainInnerContainer}>
            <div className={styles.leftMainContainerL}>
              <div className={styles.dialogBox}>
                <div className={styles.dialogBoxText}>
                  <h2 className={`${bebas.className}`}>VIPI</h2>
                  <h2 className={`${bebas.className}`}>NAIROBI!</h2>
                </div>
                {/* <img src="/dialogIllustration.svg" alt="Dialog" /> */}
              </div>
              <div className={`${styles.heroHeadline} ${bebas.className}`}>
                <div className={`${styles.layer1}`}>ARE YOU</div>
                <div className={`${styles.layer2}`}>
                  <span>READY</span> TO
                </div>
                <div className={`${styles.layer3}`}>
                  EMBRACE <span>THE</span>
                </div>
                <div className={`${styles.layer4}`}>FUTURE ?</div>
              </div>
            </div>
            <div className={styles.mascot}>
              <img
                src="/bongaMascot.png"
                alt="Bonga bot mascot"
                className={styles.mascotImg}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={`${styles.buttonLeft} ${amaranth.className}`}>
              <p className={`${amaranth.className}`}>JOIN THE WAITLIST</p>
              <RightArrow fill={true} />
            </div>
            <div className={styles.buttonRight}>
              <p className={`${amaranth.className}`}>CONTACT US</p>
              <RightArrow fill={false} />
            </div>
          </div>
        </div>
        <div
          className={`${styles.rightMainContainer} ${inter.className}`}
        ></div>
      </main>
    </>
  );
}
