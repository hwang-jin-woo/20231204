const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:3306/member', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 사용자 정보를 담을 데이터베이스 모델 정의
const User = mongoose.model('User', {
  user_pw: String,
  user_name: String,
  user_gender: String,
  user_phone_num: String,
  user_birth: String,
  user_location: String,
});

// 사용자 정보 업데이트 API
app.put('/api/hospital/:userId', async (req, res) => {
  const { userId } = req.params;
  const {
    user_pw,
    user_name,
    user_gender,
    user_phone_num,
    user_birth,
    user_location,
  } = req.body;

  try {
    // MongoDB에서 해당 사용자 찾기
    const user = await User.findOne({ _id: userId });

    // 사용자가 없는 경우
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    // 사용자 정보 업데이트
    user.user_pw = user_pw;
    user.user_name = user_name;
    user.user_gender = user_gender;
    user.user_phone_num = user_phone_num;
    user.user_birth = user_birth;
    user.user_location = user_location;

    // 업데이트 저장
    await user.save();

    res.json({ message: '사용자 정보가 성공적으로 업데이트되었습니다.' });
  } catch (error) {
    console.error('사용자 정보 업데이트 오류:', error);
    res.status(500).json({ message: '서버 오류' });
  }
});

app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
