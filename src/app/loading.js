import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image 
        className="h-96" 
        src="/spinner.svg" 
        alt="loading..." 
        width={384} // specify width based on the actual size of the image
        height={384} // specify height based on the actual size of the image
      />
    </div>
  );
}
