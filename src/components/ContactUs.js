
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const ContactUs=()=>{
    return(
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
        <div style={{width:"30rem"}} >
            <h3 style={{color:"orange",textShadow:"1px 1px 2px black"}}>__________Contact Us__________</h3>
            <h6 style={{color:"blue",textShadow:"1px 1px 2px black"}}> <PhoneIcon/>  91-9696436718</h6>
            <h6  style={{color:"blue",textShadow:"1px 1px 2px black"}}> <PhoneIcon/>  91-7007026750</h6>
            <h6 style={{color:"blue",textShadow:"1px 1px 2px black"}}> <MailOutlineIcon/> rishabh.singh2103@bbdu.ac.in</h6>
            <h6 style={{color:"blue",textShadow:"1px 1px 2px black"}}> <MailOutlineIcon/> hackprajjwal2025@bbdu.ac.in</h6>
        </div>
    </div>
    );
}

export default ContactUs;