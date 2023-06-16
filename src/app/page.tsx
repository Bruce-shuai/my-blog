import CustomButton from '@/components/button';
export default function Home() {
  return (
    <div className="lg:w-[768px]">
      <main>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">搜索</div>
          <input className="w-full border border-black h-8 rounded-sm px-2 font-bold" />
          <div className="flex">
            {/* tag list */}
            <CustomButton buttonType="tagWithNumber">JavaScript</CustomButton>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}
