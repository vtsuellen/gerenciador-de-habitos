import Image from 'next/image';
import IconDelete from '../img/delete.svg';
import DayState from '@/components/DayState';
import sortedDays from '@/utils/days';
import Link from 'next/link';
import IconPlus from '../img/plus.svg';

export default function Home() {
  const habits = {
    'Beber água': {
      '2023-11-10': true,
      '2023-11-11': undefined,
      '2023-11-12': true,
    },
    Ler: {
      '2023-11-10': true,
      '2023-11-11': true,
      '2023-11-12': false,
    },
    'Estudar Programação': {
      '2023-11-10': true,
      '2023-11-11': true,
      '2023-11-12': true,
    },
    'Fazer exercícios': {
      '2023-11-10': true,
      '2023-11-11': false,
      '2023-11-12': true,
    },
  };

  return (
    <main className={`container relative flex-col px-3 ${Object.keys(habits).length === 0 ? 'h-full' : 'pt-6'} flex justify-center items-center `}>
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <div className='text-center mb-24'>
            <h1 className='text-3xl font-light text-white font-display text-center'>
              Você não possui nenhum hábito cadastrado ainda
            </h1>
          </div>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className='mb-8 w-full'>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-white font-sans font-medium'>
                {habit}
              </span>
              <button>
                <Image
                  src={IconDelete}
                  alt='Excluir hábito'
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <section className='grid grid-cols-7 bg-neutral-800 rounded-md p-2'>
              {sortedDays.map((day) => (
                <div key={day} className='flex flex-col'>
                  <span className=' text-white font-light font-sans text-center'>
                    {day}
                  </span>
                  <DayState day={undefined} />
                </div>
              ))}
            </section>
          </div>
        ))}

      <div className='fixed bottom-4 bg- w-full left-0 flex justify-center'>
        <Link href='novo-habito'>
          <button className='text-center m-auto text-neutral-900 bg-[#7FFFD4] font-display font-regular text-8xl flex justify-center items-center rounded-full w-16 h-16 '>
            <Image
              src={IconPlus}
              alt='Adicionar hábito'
              width={36}
              height={36}
            />
          </button>
        </Link>
      </div>
    </main>
  );
}
