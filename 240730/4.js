let starbucks = [
    {
      name: '카페 라떼',
      icedOnly: false,
    },
    {
      name: '콜드 브루',
      icedOnly: true,
    },
    {
      name: '돌체 라떼',
      icedOnly: false,
    },
    {
      name: '돌체 콜드 브루',
      icedOnly: true,
    },
  ];
  
  // 여기에 코드를 작성하세요.
  // 아이스 전용 커피 배열을 만듭니다. true 만 필터한다 아이스만 가져온다 . 
  const icedOnly = starbucks.filter (coffee=> coffee.icedOnly);
  console.log(icedOnly);