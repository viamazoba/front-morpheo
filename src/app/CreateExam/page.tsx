"use client"
import { Tabs } from "@/components/01-atoms/Tabs";
import { FormQuestions } from "@/components/02-molecules/FormQuestions";
import { GeneralForm } from "@/components/03-organisms/GeneralForm";

export default function CreateExam() {

    return (
        <section className="px-7 py-8">
            <Tabs
                tabs={['Metáticas', 'Español', 'Sociales', 'Inglés']}
                tabsContent={[<GeneralForm key={1} />, <GeneralForm key={2} />, <GeneralForm key={3} />, <GeneralForm key={4} />]}
            />
        </section>
    )
}