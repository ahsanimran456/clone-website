import '../Components.css'
import {
    MailOutlined,
    PhoneOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
function HeaderSlider() {
    return (
        <div className="topheader">
            <div className='emailquiery'>
                <MailOutlined
                    style={{ marginRight: 10 }} />
                <span>
                    CustomerCare@traveltriangle.com
                </span>
            </div>
            <div className='emailquiery' style={{marginRight:"150px",border:"none"}}>
                <PhoneOutlined
                    style={{ marginRight: 10 }} />
                <span>
                    111-222-333
                </span>
            </div>
            <div className='listServices'>
                <UnorderedListOutlined  style={{fontSize:30}}/>
                <div>
                    <span>List Your Services <br /> For Free</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderSlider;