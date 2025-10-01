import Image from 'next/image'
import Link from 'next/link'

interface WidgetProps {
  image?: string
  projectName?: string
}

export const Widget: React.FC<WidgetProps> = ({
  image = '/stockphoto.png',
  projectName = 'coming soon!',
}) => {
  console.log(projectName)
  return (
    <Link href={`/project/${projectName}`}>
      <div
        className={
          'bg-secondary md:hover:bg-gray active:bg-gray md:rounded-[96px] rounded-[36px] border-4 border-accent shadow-md md:w-[360px] md:h-[540px] w-[270px] h-[180px] md:transition-colors md:duration-300 cursor-pointer'
        }
      >
        <div className="flex md:flex-col flex-row items-center md:gap-12 gap-4 p-4 w-full h-full md:mt-[36px]">
          <div className="relative md:w-3/4 md:h-[300px] w-1/2 h-3/4 overflow-hidden rounded-[16px] md:rounded-[48px]">
            <Image src={image} alt="Project image" fill style={{ objectFit: 'cover' }} />
          </div>

          <div className="font-serif text-primary text-lg text-center leading-normal">
            {projectName}
          </div>
        </div>
      </div>
    </Link>
  )
}
