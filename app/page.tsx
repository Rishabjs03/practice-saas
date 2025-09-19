export const dynamic = "force-dynamic";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";

import {
  fetchCompanion,
  getRecentSession,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

import React from "react";

const Page = async () => {
  const companions = await fetchCompanion({ limit: 3 });
  const recentSessionCompanions = await getRecentSession(10);
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map(({ id, subject, topic, duration, name }) => (
          <CompanionCard
            key={id}
            id={id}
            name={name}
            topic={topic}
            subject={subject}
            duration={duration}
            color={getSubjectColor(subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed session"
          companions={recentSessionCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
