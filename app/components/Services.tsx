
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Candy, ArrowLeftRight, UserMinus, UserPlus, Key, Sparkles } from "lucide-react"

type Ritual = {
  name: string
  icon: React.ElementType
  description: string
}

const rituals: Ritual[] = [
  { name: "Amarre", icon: Heart, description: "Une dos almas en un lazo de amor eterno." },
  { name: "Endulzamiento", icon: Candy, description: "Suaviza y mejora las relaciones personales." },
  { name: "Retorno", icon: ArrowLeftRight, description: "Trae de vuelta a un ser querido a tu vida." },
  { name: "Alejamiento", icon: UserMinus, description: "Aleja las energías negativas y personas tóxicas." },
  { name: "Dominación", icon: UserPlus, description: "Gana influencia y control en tus relaciones." },
  { name: "Abrecaminos", icon: Key, description: "Abre nuevas oportunidades en tu vida." },
  { name: "Limpias", icon: Sparkles, description: "Purifica tu energía y tu espacio vital." },
]

export default function Services() {
  const [selectedRitual, setSelectedRitual] = useState<string | null>(null)

  const handleRitualSelect = (ritual: string) => {
    setSelectedRitual(ritual)
    const message = encodeURIComponent(
      `Hola, estoy interesado/a en el ritual de ${ritual}. ¿Podrían darme más información?`,
    )
    window.location.href = `https://wa.me/51956385805?text=${message}`
  }

  return (
    <section id="servicios" className="py-12 bg-purple-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Rituales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rituals.map((ritual) => (
            <Card key={ritual.name}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ritual.icon className="h-6 w-6" />
                  <span>{ritual.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{ritual.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleRitualSelect(ritual.name)} className="w-full">
                  Consultar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

