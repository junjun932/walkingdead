let tutors = [
    {
      name: '최원장',
      time: '9to6',
    },
    {
      name: '윤창식',
      time: '9to6',
    },
    {
      name: '박가현',
      time: '9to6',
    },
    {
      name: '김병연',
      time: '9to6',
    },
  ];
  
  // 여기에 코드를 작성하세요.
  // 멘토링 상태를 확인할 수 있는 불리언 타입의 isMentoring 속성을 추가합니다.    retunr에 기존 정보 넣기 , 새로운거추가 isMentoring
  const newTutors = tutors.map(function(tutor) {
    return {
    
      ...tutor,
      
      isMentoring: true
    };
  });
  
  console.log(newTutors);
  