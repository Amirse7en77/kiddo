import React from 'react'
import Modal from '../../Modal';
import ChatButton from '../../../../../components/common/ChatButton';
interface StudentModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const StudentModal:React.FC<StudentModalProps> = ({isModalOpen,handleCloseModal}) => {
  return (
    <div >
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="">
       <div className='flex flex-col justify-center items-center gap-[8px] '>
        <img src={''}/>
        <h1>نرگس شریفی</h1>
        <div className='flex justify-between'>
          <p className=' bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>22 دانش آموز</p>
          <p className=' bg-backGround-1 gap-[8px] px-[8px] rounded-[16px] text-[10px] py-[2px]'>22 دانش آموز</p>
        </div>
        <h1>به شدت نگران وضع سلامتی پدرش است و نیاز به کمک دارد</h1>
        <div>
          <h1>توضیحات</h1>
          <p>یسبمنتیس خمنبتمه تخم لتخمئل خمقئف ئقفح نلبمخنخمبلئا خقفبت اخثتخشتلختیخ تخسیتلسخکت لخفتخستخلیفتخهلاتبخاتبلخما تئثخمتخاهصقتاکفقتا خمیبزتاخقیتختخ تخ تقخ تقافخ تخقف تاخق ت</p>
        </div>
       </div>
        
       <div onClick={handleCloseModal}>
          <ChatButton textButton={'مشاهده چت'} />
        </div>
      </Modal>
    </div>
  )
}

export default StudentModal
