'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';


export default function Home() {

  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Hello, I come bearing a message from Lex!",
    "Dear Candice,",
    "I write to you in despair of the state of my inheritance. It has come to my attention that my family has been woefully mismanaging our property. Fences have fallen into disrepair, livestock shelters have been destroyed by wind, and worst of all the peasants are getting uppity.",
    "The only refuge from my torment, is thoughts of our meeting. I have never met a woman with such grace, beauty, and cool Lord of the Rings tattoos. I only hope that I am in your thoughts as well.",
    "Yours,",
    "Lex",
  ];

  useEffect(() => {
    const knight = document.getElementById('knight');
    const dialogueBox = document.getElementById('dialogueBox');

    knight.addEventListener('animationend', () => {
      dialogueBox.classList.remove('hidden');
    });

    return () => {
      knight.removeEventListener('animationend', () => {
        dialogueBox.classList.remove('hidden');
      });
    };
  }, []);

  const nextMessage = () => {

    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setMessageIndex(0);
    }
  }


  return (
<main className="flex min-h-screen flex-col items-center justify-between bg-yellow-800 relative">
  <div className="relative">
    <Image src="/castlepath.png" alt="castlepath" width={500} height={500} />
    <Image 
      src="/knight1.png" 
      alt="knight1" 
      width={50} 
      height={50}
      className="absolute top-0 left-3/4 transform -translate-x-1/2 animate-knight-move"
      id="knight"
    />
    <Image 
      src="/Townfolk.png" 
      alt="Candice" 
      width={40} 
      height={40}
      className="absolute bottom-36  left-2/3 transform -translate-x-1/2"
    />


  </div>
  <div 
      id="dialogueBox" 
      className="hidden absolute mb-20 bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg "
    >
      <div className="flex flex-col items-center justify-center">
      <p>{messages[messageIndex]}</p>

      <button className="bg-amber-900 text-white p-1 rounded-md" onClick={nextMessage}>
        Continue
      </button>

      </div>
      
    </div>
</main>
  );
}
