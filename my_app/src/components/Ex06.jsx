{/* 예) import reactLogo from './assets/react.svg' */}

function Ex06(){

    return(
        <>
            <div className="gallery">
                <div className="imgCard">
                    {/* public(공개형) 폴더내의 이미지경로는 아래와 같이 바로 써주면되고, */}
                    {/* assets(비공개형) 폴더내의 이미지경로는 맨위에 import를 선언 해줘야됨(function밖 맨위) */}
                    <img src="/images/image02.png" alt="풍경2" />
                    <p>아름다운 산</p>
                </div>
                <div className="imgCard">
                    <img src="/images/image01.png" alt="풍경1" />
                    <p>푸른 바다</p>
                </div>
                <div className="imgCard">
                    <img src="/images/image03.png" alt="풍경3" />
                    <p>도시 야경</p>
                </div>
            </div>
        </>
    )   
}
export default Ex06