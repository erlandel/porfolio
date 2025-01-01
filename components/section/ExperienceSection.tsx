import { UilSuitcase } from '@/icons/icons';
import React from 'react';

export const ExperienceSection = () => {
    const dataExperience = [
        {
            id: 1,
            appointment: 'Frontend Engineer',
            agency: 'Eclipse Agency',
            date: 'Octubre 2024',
            description:
                "Diseño y desarrollo frontend para una agencia de venta de boletos aéreos y servicios de viajes. Creación de interfaces de usuario intuitivas y funcionales, asegurando la mejor experiencia para los usuarios. Implementación de prácticas modernas de diseño y tecnologías web."
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-center">
                <UilSuitcase className="mr-2" />
                <h2 className="text-2xl">Experiencia Laboral</h2>
            </div>

            {dataExperience.map((experience) => (
                <div className="flex justify-around flex-col items-center md:flex-row gap-10 mt-8 mx-4" key={experience.id} >
                    <div>
                        <h3 className="flex items-center gap-2 font-bold text-xl bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                            {experience.appointment}
                        </h3>
                        <h4 className="text-lg">{experience.agency}</h4>
                        <p className="text-md text-gray-600 dark:text-gray-400">
                            {experience.date}
                        </p>
                    </div>
                    <div className="max-w-lg text-justify">
                        <p>{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceSection;
