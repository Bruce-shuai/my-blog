export type ButtonType = 'primary' | 'tag' | 'tagWithNumber';
interface ButtonProps {
  buttonType: ButtonType;
  className?: string;
  children: React.ReactNode;
}

export default function CustomButton(btnProps: ButtonProps) {
  const btnType = btnProps.buttonType;
  let btnClass = '';
  switch (btnType) {
    case 'primary':
      btnClass = 'hover:bg-sky-100 border-sky-400';
      break;
    case 'tag':
      btnClass = 'bg-gray-200 text-gray-500';
      break;
    case 'tagWithNumber':
      btnClass = 'hover:bg-sky-300 border-black relative px-3 h-[34px]';
      break;
  }
  console.log(btnType);
  return (
    <div
      className={`border rounded-md cursor-pointer px-4 py-1 ${btnClass} ${btnProps.className}`}
    >
      {btnProps.children}
      {btnType === 'tagWithNumber' && (
        <span className="text-sm flex justify-center items-center w-8 text-white bg-slate-700 h-[34px]  p-2 rounded-e-md absolute -right-7 -top-[1px]">
          23
        </span>
      )}
    </div>
  );
}
