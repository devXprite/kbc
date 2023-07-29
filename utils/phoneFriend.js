import { sample } from "lodash";

const replies = [
    'Wow, I always joke about you being an idiot, and now you’ve proved me right! The answer is "%ans%" ! How could you not know that?!',
    'That’s easy! Can’t believe you need to ask. You’re such an idiot - the correct answer is "%ans%".',
    'Ha-ha! And here I thought you knew everything. Even I know the correct answer is "%ans%". You should go with that.',
    'Hi, I read something about this recently and am sure the correct answer is "%ans%".',
    'Sorry! I know nothing about this topic. I really can’t help you. You’re on your own!',
    'You definitely asked the right friend! "%ans%" is the correct answer. I’m sure of it'

]

const phoneFriend = (correctAnswer) => {
    const reply = sample(replies);
    const answer = reply.replace('%ans%', correctAnswer);
    return answer;
}
 
export default phoneFriend;