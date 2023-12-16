"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import TopBanner from '@/components/TopBanner';

const questions = [
  {
    text: 'Which part is this animal injured?',
    options: [
      { text: 'Head', imgSrc: '/head.svg' },
      { text: 'Legs', imgSrc: '/legs.svg' },
      { text: 'Arms', imgSrc: '/arms.svg' },
      { text: "Can't Identify", imgSrc: '/question.svg' },
    ],
    
  },
  {
    text: 'Can you tell if the animal is conscious?',
    options: [
      { text: 'Conscious', imgSrc: '/conscious.svg' },
      { text: 'Unconscious', imgSrc: '/unconscious.svg' },
    ],
  },
  {
    text: 'Do you notice any bleeding or open wounds?',
    options: [
      { text: 'Yes', imgSrc: '/danger.svg' },
      { text: 'No', imgSrc: '/good.svg' },
    ],
  },
  {
    text: 'Do you want save the location?',
    options: [
      { text: 'Save', imgSrc: '/save.svg' },
      { text: 'Skip', imgSrc: '/skip.svg' },
     
    ],
  },
];

const FirstAidQuiz = () => {
      const [questionIndex, setQuestionIndex] = useState(0);
      const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
      const router = useRouter();
    
      const handleNext = () => {
        if (questionIndex < questions.length - 1) {
          setQuestionIndex(questionIndex + 1);
        } else {
          const queryParam = encodeURIComponent(JSON.stringify(selectedOptions.map(option => option.text)));
          router.push(`/result?selections=${queryParam}`);
        }
      };
    
      const selectOption = (index: number) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = questions[questionIndex].options[index];
        setSelectedOptions(newSelectedOptions);
      };
    
      const isSelected = (index: number) => {
        return selectedOptions[questionIndex] === questions[questionIndex].options[index];
      };
    
      return (
        <div className="flex flex-col min-h-screen items-center justify-center p-4">
          <div className="rounded-lg shadow-lg p-4 w-full max-w-md green-gradient">
            <TopBanner />
            <div className="my-4">
              <div className="text-xl font-semibold text-center mb-4">First Aid Quiz</div>
              <Image src="/bird.svg" alt="Bird" width={200} height={200} className="rounded-lg mx-auto" />
              <div className="text-lg font-medium text-center mb-4">
                {questions[questionIndex].text}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {questions[questionIndex].options.map((option, index) => (
                  <button
                    key={option.text}
                    className={`flex items-center justify-center p-4 border rounded-lg ${
                      isSelected(index) ? 'bg-green-500 text-white' : 'bg-gray-100'
                    }`}
                    onClick={() => selectOption(index)}
                  >
                    <Image src={option.imgSrc} alt={option.text} width={24} height={24} />
                    <span className="ml-2">{option.text}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col items-center mb-4">
                <button
                  onClick={handleNext}
                  className={`text-white px-6 py-2 rounded-lg ${
                    selectedOptions[questionIndex] === null ? 'bg-green-300' : 'bg-green-600'
                  }`}
                  disabled={selectedOptions[questionIndex] === null}
                >
                  Next
                </button>
                <span className="mt-2">{questionIndex + 1}/4</span>
              </div>
            </div>
          </div>
          <NavBar />
        </div>
      );
    };
    
    export default FirstAidQuiz;