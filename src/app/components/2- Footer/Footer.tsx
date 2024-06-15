import Link from 'next/link';
import { footerLinks } from "../../constants/index"

type ColumnProps = {
    title: string;
    links: Array<string>
}

const Footer_Info = ({title, links}: ColumnProps) =>(
    <div>
        <h4 className='font-extrabold pb-1'>{title}</h4>
        <ul className='pl-0 flex flex-col gap-[2px]'>
            {links.map((link) => <Link href={'/'} key={link}>{link}</Link> )}
        </ul>
    </div>
)

function Footer(){
    return(
        <footer className='bg-[#7c7a7a18] dark:bg-[#333232b4] border-solid border-t-2 dark:border-[#3f3f4666] p-3'>
            <div className='info-container flex justify-between flex-wrap gap-[10px] p-3 font-normal'>
                <div>
                    <Footer_Info title={footerLinks[0].title} links={footerLinks[0].links} />
                </div>
                <div>
                    <Footer_Info title={footerLinks[1].title} links={footerLinks[1].links} />
                </div>
                <div>
                    <Footer_Info title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>
                <div>
                    <Footer_Info title={footerLinks[3].title} links={footerLinks[3].links} />
                </div>
            </div>
            <div className="copyright  flex items-center p-0  mt-[15px] border-t-2 border-[#3f3f4666]">
                <p>© 2024 All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;