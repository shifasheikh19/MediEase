import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#6366F1] p-10 rounded-lg flex justify-between items-center text-white'>
      <div className='max-w-xl'>
        <h1 className='text-4xl font-bold mb-4'>
          Book Appointment <br />With 100+ Trusted Doctors
        </h1>
        <p className='mb-6'>
          Find your specialist and book your consultation easily and quickly.
        </p>
        {/* 🔻 Button removed */}
      </div>

      <img
        src="/assets/doctor_image.png"
        alt="Doctor"
        className='h-72 object-contain'
      />
    </div>
  )
}

export default Banner

