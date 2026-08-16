import { About } from "@/components/About";
import { Construction } from "@/components/Construction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Infrastructure } from "@/components/Infrastructure";
import { Interiors } from "@/components/Interiors";
import { LeadSection } from "@/components/LeadSection";
import { Location } from "@/components/Location";
import { Plans } from "@/components/Plans";
import { Residences } from "@/components/Residences";

export default function Home() {
  return <><a className="skipLink" href="#main">К основному содержанию</a><Header /><main id="main"><Hero /><About /><Residences /><Interiors /><Infrastructure /><Plans /><Construction /><Location /><LeadSection /></main><Footer /></>;
}
