import Image from "next/image";
import MajikodeText from "@/assets/majikode-text.png";
import WorkWaveLogo from "@/assets/workwave-logo.png";
import WorkWaveDesktop from "@/assets/workwave-desktop.png";
import WorkWaveMobile from "@/assets/workwave-mobile.png";
import OurOtherServicesImage from "@/assets/our-other-services-color.svg";
import { FaRegEnvelope } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import CalPopupCalendar from "@/components/CalPopupCalendar";
import DitheredButton from "@/components/DitheredButton";
import SectionHeading from "@/components/SectionHeading";
import DitheredLink from "@/components/DitheredLink";
import ServiceCard from "@/components/ServiceCard";
import { IoConstruct } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { FaReact, FaGolang } from "react-icons/fa6";
import { FaServer, FaLinkedin } from "react-icons/fa";
import { VelocityScroll } from "@/components/VelocityScroll";
import EndToEndProcessImage from "@/assets/end-to-end-process-color.svg";
import MutedText from "@/components/MutedText";
import SparklesText from "@/components/SparklesText";
import Section from "@/components/Section";
import { MdArchitecture } from "react-icons/md";

export default function Home() {
    return (
        <main className="flex flex-col justify-center gap-8">
            <Section>
                <Image src={MajikodeText} alt="Majikode" className="w-40" />
                <h1 className="text-2xl font-bold text-center">We build enchanting digital products.</h1>
                <MutedText className="text-center">
                    Majikode is a result-based product development consultancy specializing in meeting deadlines.
                </MutedText>
                <div className="flex mt-4 gap-4">
                    <CalPopupCalendar>
                        <DitheredButton>Book a discovery call</DitheredButton>
                    </CalPopupCalendar>
                    <DitheredLink href="mailto:hello@majikode.com">
                        <FaRegEnvelope />
                    </DitheredLink>
                </div>
            </Section>
            <Section>
                <SectionHeading>What can we deliver?</SectionHeading>
                <div className="flex flex-col">
                    <ServiceCard>
                        <IoConstruct />
                        Custom solutions
                    </ServiceCard>
                    <ServiceCard>
                        <BiLogoDjango />
                        Django specialists
                    </ServiceCard>
                    <ServiceCard>
                        <HiLightningBolt />
                        Performance optimizations
                    </ServiceCard>
                </div>
                <Image src={OurOtherServicesImage} alt="Our other services" />
                <VelocityScroll>
                    <div className="inline-flex gap-2">
                        <span className="flex gap-1 items-center">
                            <MdArchitecture />
                            Software Architecture
                        </span>
                        <span className="flex gap-1 items-center">
                            <FaReact />
                            React Development
                        </span>
                        <span className="flex gap-1 items-center">
                            <FaGolang />
                            Go Development
                        </span>
                        <span className="flex gap-1 items-center">
                            <FaServer />
                            Infrastructure Management
                        </span>
                    </div>
                </VelocityScroll>
            </Section>
            <Section>
                <SectionHeading>Our End-to-End Process</SectionHeading>
                <Image
                    src={EndToEndProcessImage}
                    alt="Discovery, Design, Incremental delivery, Publishing, Support. All on schedule. Guaranteed."
                />
            </Section>
            <Section>
                <SectionHeading>The Magic of Majikode</SectionHeading>
                <MutedText className="text-center">
                    We are a team of ambitious craftsmen. We excel at getting stuff done exactly how you want it and
                    when you want it.
                </MutedText>
                <MutedText className="text-center">
                    We add our <SparklesText text="magic touch" /> underneath the hood — where it will be invisible to
                    you and your users. But it will make sure the software is reliable and maintainable for the years to
                    come.
                </MutedText>
                <div className="flex items-center">
                    <MutedText className="mx-2">We work on innovative and fruitful projects like:</MutedText>
                    <a href="https://workwave.pl" target="_blank" rel="noreferrer">
                        <Image src={WorkWaveLogo} alt="WorkWave" className="w-32" />
                    </a>
                </div>
                <a
                    href="https://workwave.pl"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-56 py-8 transition-all hover:scale-105"
                >
                    <Image
                        src={WorkWaveDesktop}
                        alt="WorkWave desktop"
                        className="object-contain h-40 translate-x-4 -rotate-12"
                    />
                    <Image src={WorkWaveMobile} alt="WorkWave mobile" className="object-contain h-40 rotate-6" />
                </a>
            </Section>
            <Section>
                <SectionHeading>Let&apos;s make something magical together</SectionHeading>
                <MutedText className="flex flex-col text-left gap-4">
                    <span>We are always on the lookout for new projects and clients.</span>
                    <span>
                        We provide a <mark>project timeline and estimated budget</mark> before billing for any work. We
                        also offer a <mark>free consultation session</mark> for any project. If you are not satisfied,
                        you are completely free to walk away with <mark>zero obligations</mark>.
                    </span>
                </MutedText>
                <CalPopupCalendar>
                    <DitheredButton>Book a discovery call</DitheredButton>
                </CalPopupCalendar>
            </Section>
            <Section>
                <div className="flex gap-4 text-neutral-300">
                    <a
                        href="https://clutch.co/profile/majikode"
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-2 items-center"
                    >
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 118">
                            <path
                                d="M48.581.995C8.531 8.224-11.678 51.212 7.633 88.097c14.014 26.767 49.508 37.352 77.824 23.208 5.397-2.696 17.477-11.332 17.518-12.524.014-.395-3.958-4.876-8.825-9.956l-8.85-9.237-4.321 3.698c-9.434 8.076-24.728 10.532-35.749 5.741-20.518-8.918-25.683-40.544-9.073-55.55 12.374-11.179 33.45-11.068 45.054.237l3.71 3.615 9.04-8.845c4.971-4.865 9.021-9.102 9-9.415-.061-.894-8.803-7.241-14.911-10.826C77.16 1.852 60.639-1.182 48.581.995m.803 40.862C42.255 45.191 39.5 49.97 39.5 59c0 6.902.285 8.029 2.892 11.447C53.233 84.661 76 76.906 76 59c0-13.711-14.284-22.911-26.616-17.143"
                                fillRule="evenodd"
                                fill="currentColor"
                            />
                        </svg>
                        Clutch
                    </a>
                    <a
                        href="https://www.linkedin.com/company/majikode"
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-2 items-center"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </div>
            </Section>
        </main>
    );
}
