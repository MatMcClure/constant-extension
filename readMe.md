Thx for applying to our startup. We are looking to hire our first engineer asap so let's get things in motion. We've received over one thousand applicants all with unique experiences and I would love to interview you all and get to know you on a personal level, but it's sadly not feasible. We decided we'll only interview candidates that pass our custom take home challenge. I know take home challenges tend to be annoying and not worth the time but this one is different. I've spent lots of time and care building the challenge from scratch and making it fun and interesting. It's not a typical leetcode/algorithm/logic assessment; those have solutions that are easily accessible, and do a horrible job at measuring your ability to solve real problems. Anyone who passes the challenge immediately gets an interview with our CTO and thus has an extremely high likelihood of being chosen.

Here is the take home challenge:
Write the few lines of code needed to stop a webpage from detecting you have clicked off the tab.

What we measure with this take home challenge:
This is not really a frontend challenge. This challenge is designed to only measure your resourcefulness as an engineer by your ability to find undocumented solutions. Being an expert on chrome extensions, javascript, or browsers doesn't help at all. I know this with a high degree of certainty because most big chrome extension companies don't know how to do this, and they have teams of chrome extension engineers with 10+ years experience. What their engineers all lack is resourcefulness, not experience. In fact, the solution to this challenge is so precious that four large chrome extension companies paid us for these few lines of code.

More details:
When injecting javascript code into a webpage via a chrome extension or otherwise, a common use case is to continue performing actions on the webpage even while the user does not have that tab active. Unfortunately, most websites check if the tab is active using very sophisticated methods. Switching tabs, minimizing/closing the browser, or moving the browser off screen, all trigger the tab to become inactive. When a tab is inactive, web pages usually throttle most javascript code execution. The goal here is to circumvent this limitation, and we’ve made it easy to test your solutions with the sample code in the challenge. You only need to write a few lines of code to pass the challenge.

Rules:
There are only two rules. 
1) No DOM manipulation allowed such as overriding document.visibilityState.
2) You can only change the code in one file: background.js. When testing your code, we will use the original challenge code and only add in your updated background.js file.

Submission:
Please reply to this only with your updated background.js file.

Video guide: 
Please watch the video I made describing the challenge. It highlights an easy way to test if your solution works. https://vimeo.com/923628666

Here is the job posting in case you lost it:
https://www.linkedin.com/jobs/view/3851136104

Here is the code for the challenge:
You are given a simple chrome extension that injects javascript into a webpage and makes it easy to test your solution. https://drive.google.com/drive/folders/1HMuMAYHHAQ2klsqUVQpTDGFUGXQCoePZ

Use this webpage for easy testing:
https://ai-stealth-challenge.web.app

If you have questions please figure them out on your own as that is part of the challenge. Good luck, and I really hope to hear from you soon :)