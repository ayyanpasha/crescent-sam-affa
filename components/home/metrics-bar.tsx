import { Card } from "@/components/ui/card"
import { Award, Zap, Users, Calendar } from "lucide-react"

const metrics = [
  {
    icon: Calendar,
    value: "40+",
    label: "Years Experience",
    description: "Serving since 1984",
  },
  {
    icon: Zap,
    value: "190,670",
    label: "kVA Power Handled",
    description: "Massive capacity projects",
  },
  {
    icon: Users,
    value: "500+",
    label: "Projects Completed",
    description: "Successful deliveries",
  },
  {
    icon: Award,
    value: "Class 1",
    label: "Licensed Contractor",
    description: "Government certified",
  },
]

export function MetricsBar() {
  return (
    <section className="py-16 bg-white relative -mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-full mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-3xl text-[#002D62] mb-2">{metric.value}</h3>
              <p className="font-semibold text-gray-900 mb-1">{metric.label}</p>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
