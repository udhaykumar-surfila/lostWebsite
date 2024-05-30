import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const openWhatsAppChat = (phoneNumber) => {
    window.open(
      `https://wa.me/${phoneNumber}`,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  return (
    <>
      <div className='w-[100vw] bg-[#116b89] flex flex-col sm:flex-row  justify-between px-10 sm:px-28 py-12 text-white'>
        <div className=''>
          <h1 className='text-3xl font-playfair font-medium'>
            Lost Traverse
          </h1>
          <p className='text-xl text-[#8cb6c4]'>Come get lost with us.</p>
          <Link to='/'>
            <button className='border-2 border-[#8cb6c4] p-1 px-3 my-4 rounded-md font-medium font-dmsans hover:bg-black hover:bg-opacity-40 duration-100 ease-in'>
              Book Now
            </button>
          </Link>
        </div>
        <div className='flex flex-col sm:items-end'>
          <ul>
            <li className='text-sm'>Rules and Legal</li>
            <Link to='/terms'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Terms and Conditions
              </li>
            </Link>
            <Link to='/privacy'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Privacy Policy
              </li>
            </Link>
            <Link to='/guest'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Guest Policy
              </li>
            </Link>
            <Link to='/cancellation'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Cancellation Policy
              </li>
            </Link>
            <Link to='/tourgroups'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Tour Groups and Sex Tourists
              </li>
            </Link>
          </ul>
        </div>
        <div className='flex flex-col sm:items-end'>
          <ul>
            <li className='text-sm'>Navigate</li>
            <HashLink to='/'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Home
              </li>
            </HashLink>
            <HashLink to='/#our-story'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Our Story
              </li>
            </HashLink>
            <HashLink to='/#locations'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Hostels
              </li>
            </HashLink>
            <HashLink to='/workwithus'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Work with Us
              </li>
            </HashLink>
            <HashLink to='/#gallery'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Gallery
              </li>
            </HashLink>
            <HashLink to='/workwithus#contactus'>
              <li className='text-sm text-[#8cb6c4] border-b border-transparent hover:border-[#8cb6c4] w-fit'>
                Contact Us
              </li>
            </HashLink>
          </ul>
        </div>
        <div className='flex flex-col sm:items-end'>
          <ul>
            <li className='text-sm'>Contact Us</li>
            <li className='text-sm text-[#8cb6c4]'>
              For India:
              <span onClick={() => openWhatsAppChat('+919773312999')} style={{ cursor: 'pointer' }}>
                +91 9773312999
              </span>
            </li>
            {/* <li className='text-sm text-[#8cb6c4]'>
              Varkala:
              <span
                onClick={() => openWhatsAppChat('+917012416343')}
                style={{ cursor: 'pointer' }}
              >
                +91 7012416343
              </span>
            </li>
            <li className='text-sm text-[#8cb6c4]'>
              Goa:
              <span
                onClick={() => openWhatsAppChat('+919307762867')}
                style={{ cursor: 'pointer' }}
              >
                +91 9307762867
              </span>
            </li> */}
            <li className='text-sm text-[#8cb6c4]'>
              Arugam Bay:
              <span
                onClick={() => openWhatsAppChat('+94772875566')}
                style={{ cursor: 'pointer' }}
              >
                +94 77 287 5566
              </span>
            </li>
            <li className='text-sm text-[#8cb6c4]'>
              Weligama:{' '}
              <span
                onClick={() => openWhatsAppChat('+916230267754')}
                style={{ cursor: 'pointer' }}
              >
                +94 77 834 0685
              </span>
            </li>
            <li className='text-sm text-[#8cb6c4]'>
              Hiriketiya:{' '}
              <span
                onClick={() => openWhatsAppChat('+916230267754')}
                style={{ cursor: 'pointer' }}
              >
                +94 74 220 4478
              </span>
            </li>
            {/* <li className='text-sm text-[#8cb6c4]'>
              Manali:
              <span
                onClick={() => openWhatsAppChat('+919307762867')}
                style={{ cursor: 'pointer' }}
              >
                +91 7807770049
              </span>
            </li> */}
            <div class='flex items-center mt-2'>
              <a
                rel='noopener noreferrer'
                href='https://www.instagram.com/losttraverse/'
                target='_blank'
                class='flex justify-center items-center h-8 w-8 group relative border-2 border-[#8cb6c4] rounded-full mr-3'
              >
                <svg
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                  className='h-3 w-3'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                </svg>
              </a>
              <a
                rel='noopener noreferrer'
                href='https://www.facebook.com/losttraverse'
                target='_blank'
                class='flex justify-center items-center h-8 w-8 group relative border-2 border-[#8cb6c4] rounded-full mr-3'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 320 512'
                  class='absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                  className='h-3 w-3'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
                </svg>
              </a>
              <a
                rel='noopener noreferrer'
                href='https://www.linkedin.com/company/13264817/admin/feed/posts/'
                target='_blank'
                class='flex justify-center items-center h-8 w-8 group relative border-2 border-[#8cb6c4] rounded-full mr-3'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 448 512'
                  class='absolute group-hover:text-logoGreen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                </svg>
              </a>
              <a
                rel='noopener noreferrer'
                href='https://www.youtube.com/channel/UCb1KNMXPfwGA_DAUZmvohHg'
                target='_blank'
                class='flex justify-center items-center h-8 w-8 group relative border-2 border-[#8cb6c4] rounded-full mr-3'
              >
                <svg
                  version='1.1'
                  id='Layer_1'
                  viewBox='0 0 461.001 461.001'
                  className='w-4 text-white fill-white'
                >
                  <g>
                    <path
                      d='M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z'
                    />
                  </g>
                </svg>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className='bg-[#094256] flex flex-row  justify-between px-10 sm:px-28 py-2 text-[#3e7a8e] text-xs items-center'>
        <p>&#169; 2023 Lost Traverse</p>
        <a
          href='https://www.instagram.com/vanshika_703/'
          target='_blank'
          rel='noreferrer'
        >
          <p> &lt;Site by V /&gt;</p>
        </a>
      </div>
    </>
  );
};

export default Footer;
