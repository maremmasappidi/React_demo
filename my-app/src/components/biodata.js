const user=
{
name:'techwave',
imageUrl:'https://www.bing.com/images/search?view=detailV2&ccid=WdVtAUOA&id=28E62027CB7382FD948981BC1FCD38FA2C5CD2D5&thid=OIP.WdVtAUOAZ9liKdMb9YY2IgHaBj&mediaurl=https%3a%2f%2fhightechcampus.com%2fstorage%2f2250%2fLogo-Master-RGB-Techwave.png&exph=286&expw=1366&q=techwave+photos&simid=608018166830945863&FORM=IRPRST&ck=D7D4F913454D0571AFBE60971E602F21&selectedIndex=7&ajaxhist=0&ajaxserp=0',
imageSize:100
};
export default function biodata()
{
    return(
        <div>
            <h1> {user.name}</h1>
            <img src={user.imageUrl} alt="techwave"
            style={{width:user.imageSize,height:user.imageSize}}
            />
        </div>
    );
}