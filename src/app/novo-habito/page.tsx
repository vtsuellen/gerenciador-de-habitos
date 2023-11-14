import Image from 'next/image';
import IconDelete from '../../img/delete.svg';
import IconCheck from '../../img/check.svg';

function Newhabit() {
  return (
    <main className='container relative flex flex-col px-3 h-full'>
      <h1 className='text-4xl font-light text-center text-white font-display pt-10'>
        Novo Hábito
      </h1>
      <form className='flex flex-col gap-4 mt-8 '>
        <input
          type='text'
          name='habit'
          id='habit'
          className=' px-3 py-2 font-sans text-xl text-white rounded-md bg-neutral-800 border-none outline-none ashadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7FFFD4] focus:ring-[#7FFFD4] block w-full  sm:text-sm focus:ring-1'
          placeholder="Novo Hábito"
        />
      </form>
      <div className='flex justify-evenly pt-8'>
        <button className=':'>
          <Image src={IconCheck} alt='Salvar hábito' width={30} height={30} />
        </button>
        <button>
          <Image src={IconDelete} alt='Excluir hábito' width={30} height={30} />
        </button>
      </div>
    </main>
  );
}

export default Newhabit;
