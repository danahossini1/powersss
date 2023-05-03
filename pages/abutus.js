import React from 'react'

export default function Abutus() {
  return (
    <div className='max-w-2xl mx-8 md:m-auto pb-12'>
      <p className='font-bold md:tracking-[0.1rem] leading-8 text-[#c78521] dark:text-[#dab643] my-12' >
        با سلام،
        وب سایت ما به عنوان یک سامانه فروش شماره مجازی، با هدف فراهم کردن خدمات مجازی‌سازی به صورت آسان و سریع برای مشتریان طراحی شده است. با توجه به رشد روز افزون صنعت فناوری اطلاعات، اهمیت این خدمات نیز بیشتر شده است. در وب سایت ما می‌توانید با کمترین هزینه، شماره مجازی اختصاصی خود را در کشورهای مختلف به راحتی تهیه کنید. همچنین برای تضمین کیفیت خدمات و جلب اعتماد مشتریان، سعی داریم تمامی شماره‌ها را از اپراتورهای معتبر و قابل اعتماد تهیه کنیم.
        ما به دنبال ارائه خدمات بهتر و بهبود رضایت مشتریان خود هستیم. با تشکر از حسن توجه شما.
      </p>
      <h1 className='font-bold md:tracking-[0.1rem] text-[#c78521] dark:text-[#dab643] my-12'>
        ضمنا این وب سایت بصورت تستی طراحی شده است و قادر به ارائه  خدمات به شما عزیزان نمی‌باشد.
      </h1>

      <h1 className='text-stone-900 my-6  dark:text-slate-200 font-bold'>ارتباط با ما</h1>
      <ul className='flex justify-around max-w-xs  text-stone-900 m  font-bold dark:text-slate-300'>
        <li>
          <a href="https://telegram.me/danahossini1" className='flex flex-col items-center text-sm gap-2'>
            <img src="./images/sv/telegram.svg" className='w-8' alt="" />
            <span>تلگرام</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/989184225672" className='flex flex-col items-center text-sm gap-2'>
            <img src="./images/sv/whatsapp.svg" className='w-8' alt="" />
            <span>واتساپ</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/danahossini1" className='flex flex-col items-center text-sm gap-2'>
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <span>گیت هاب</span>
          </a>
        </li>
        <li>
          <a href="mailto:danahossini1@gmail.com" className='flex flex-col items-center text-sm gap-2'>
            <img src="./images/sv/google.svg" className='w-8' alt="" />
            <span>ایمیل</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
