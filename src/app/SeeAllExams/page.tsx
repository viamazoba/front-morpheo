import { CardDetailExam } from "@/components/02-molecules/cards/CardDetailExam"


export default function SeeAllExams() {

    const arrayExample = ['1', '2', '3', '4', '5', '6', '7']

    return (
        <section className="min-h-lvh">

            <div className="flex flex-wrap gap-x-7 gap-y-4 max-w-7xl">
                {
                    arrayExample.map(item => (
                        <CardDetailExam key={item} />
                    ))
                }
            </div>

        </section>
    )
} 