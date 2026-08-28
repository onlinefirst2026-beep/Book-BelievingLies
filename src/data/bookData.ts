import { BookChapter, BookPage } from '../types';

export const BOOK_METADATA = {
  title: "The Danger of Believing Lies",
  subtitle: "Lessons from the Old and Young Prophet in 1 Kings 13 for This Generation",
  scripturalAnchor: "1 Kings 13:1-32",
  author: "Pastor Cecilia Oluwatoyin Fayefunmi",
  authorTitle: "Teacher of God's Word & Author",
  otherBooks: ["At the Throne of Grace"],
  devotionalSeries: "Daily Grace (Since 2010)",
  location: "Vienna, Austria",
  origin: "Lagos, Nigeria",
  authorBio: "Cecilia Fayefunmi is a teacher of Gods word. She is anointed by the Holy Spirit to preach the undiluted word of God and to impact the message of love and joy to the people of God. Under the inspiration of the Holy Spirit in 2010, she started writing devotionals titled Daily Grace which has been a source of inspiration to many. She was born in Lagos, Nigeria. Lived in Lagos for a reasonable length of time and have a pleasant childhood with a lot of love from her family. She is compassionate, outgoing and very dedicated. Also she is a good listener and enjoys helping others. She believe in treating others the way, she would want to be treated. She has been married to Evangelist Fayefunmi since 1982 and has three children. Cecilia lives in Vienna, Austria with her husband and children.",
  copyright: "Copyright © 2026 Pastor Cecilia Oluwatoyin Fayefunmi. All rights reserved.",
  disclaimer: "This publication is intended solely for spiritual edification, biblical teaching, and personal ministry development. The scriptural expositions, doctrinal commentaries, and practical safeguards presented herein are grounded in the undiluted Word of God. No part of this book may be reproduced, distributed, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, or otherwise—without prior written permission from the author and copyright holder, except for brief quotations used in theological reviews, sermons, and critical articles as permitted by international copyright law. Scripture quotations are taken from the Holy Bible.",
  totalChapters: 33,
  totalPages: 41,
  estimatedReadTime: "45 mins",
  publicationYear: "2026 Edition",
  description: "A profound spiritual guide examining the tragic encounter between the young prophet and the old prophet in Bethel, uncovering timeless safeguards against spiritual deception, emotional manipulation, cultural compromise, and half-truths in our modern digital era."
};

export const BOOK_CHAPTERS: BookChapter[] = [
  {
    id: "intro",
    type: "intro",
    title: "Introduction: A Generation Surrounded by Lies",
    subtitle: "The Urgency of Biblical Discernment",
    themeSummary: "We are living in an era where truth is under relentless attack and popular opinion masquerades as authority.",
    illustrationType: "voices",
    pdfPages: [4, 5],
    blocks: [
      {
        type: "heading",
        text: "Introduction: A Generation Surrounded by Lies"
      },
      {
        type: "paragraph",
        text: "We are living in an age where truth is constantly under attack. Lies are no longer hidden in dark corners; they are celebrated publicly, shared rapidly, and defended passionately. Technology has made communication easier, but it has also multiplied deception. People now consume information without questioning its source, motive, or accuracy. Many no longer ask whether something is true; they only ask whether it is popular."
      },
      {
        type: "paragraph",
        text: "This generation faces spiritual confusion unlike many before it. False teachings spread through screens, pulpits, social media platforms, entertainment, and even educational institutions. People are encouraged to create their own truth instead of submitting to God’s truth. As a result, many are spiritually weak, morally confused, emotionally unstable, and vulnerable to deception."
      },
      {
        type: "paragraph",
        text: "The Bible repeatedly warns about deception. Satan himself is called the father of lies. From the Garden of Eden until now, his strategy has remained the same: distort truth in order to destroy lives. The tragedy is not only that lies exist, but that many believers accept them without discernment."
      },
      {
        type: "paragraph",
        text: "One of the most powerful stories about deception in Scripture is found in 1 Kings 13. It is the story of a young prophet who received a direct command from God but later believed the lie of an older prophet. That single act of deception cost him his life."
      },
      {
        type: "quote",
        text: "This story is deeply relevant today because many people know what God has said, yet they abandon truth because another voice sounds more convincing, experienced, emotional, intellectual, or spiritual.",
        author: "1 Kings 13 Reflection"
      },
      {
        type: "paragraph",
        text: "The story reveals that:"
      },
      {
        type: "bullet",
        items: [
          "Not every spiritual voice speaks truth.",
          "Age does not always equal wisdom.",
          "Spiritual titles do not guarantee honesty.",
          "Partial obedience is still disobedience.",
          "One lie can destroy an entire destiny."
        ]
      },
      {
        type: "callout",
        text: "This book explores the lessons from that encounter and applies them to the modern world. It is written for young people, leaders, pastors, parents, and every believer who desires to walk in truth in a deceptive age. Truth matters because eternity matters."
      }
    ]
  },
  {
    id: "ch-1",
    chapterNumber: 1,
    type: "chapter",
    title: "Chapter 1: The Story of the Young Prophet",
    subtitle: "Bold Obedience Followed by Fatal Deception",
    themeSummary: "A courageous young prophet stands before King Jeroboam with supernatural power, but later lets his guard down under a tree.",
    illustrationType: "prophet",
    pdfPages: [5, 6],
    blocks: [
      {
        type: "heading",
        text: "Chapter 1: The Story of the Young Prophet"
      },
      {
        type: "paragraph",
        text: "The story begins during the reign of King Jeroboam, a king who led Israel into idolatry. God sent a young prophet from Judah to Bethel with a clear assignment: confront the wicked altar that Jeroboam had built."
      },
      {
        type: "paragraph",
        text: "The prophet obeyed courageously. He stood before the king and declared God’s judgment. The altar split apart exactly as he prophesied, proving that God’s word was true."
      },
      {
        type: "paragraph",
        text: "Jeroboam attempted to seize the prophet, but God immediately judged the king by causing his hand to wither. When the king pleaded for mercy, the prophet prayed, and the hand was restored."
      },
      {
        type: "paragraph",
        text: "This young prophet had power, boldness, and divine direction. He heard from God clearly. He was not spiritually weak. Yet despite all these things, he eventually fell into deception."
      },
      {
        type: "paragraph",
        text: "After delivering the message, God gave him strict instructions:"
      },
      {
        type: "bullet",
        items: [
          "Do not eat bread.",
          "Do not drink water.",
          "Do not return the same way you came."
        ]
      },
      {
        type: "paragraph",
        text: "The instructions were specific and non-negotiable."
      },
      {
        type: "paragraph",
        text: "On his journey home, an older prophet heard about the events and pursued him. When the old prophet found him resting under a tree, he invited him home to eat. The young prophet refused and repeated God’s command faithfully."
      },
      {
        type: "paragraph",
        text: "Then came the lie. The old prophet said an angel had spoken to him and instructed him to bring the young prophet home."
      },
      {
        type: "scripture",
        text: "“But he lied unto him.”",
        reference: "1 Kings 13:18"
      },
      {
        type: "paragraph",
        text: "The young prophet believed the lie, returned with him, and ate bread. During the meal, the true word of God came through the old prophet announcing judgment on the young prophet for disobeying God. As the young prophet traveled away, a lion met him on the road and killed him."
      },
      {
        type: "callout",
        text: "It is one of the most shocking stories in Scripture because the prophet was not destroyed by immorality, drunkenness, or open rebellion. He was destroyed because he believed a lie. That is the danger of deception."
      }
    ]
  },
  {
    id: "ch-2",
    chapterNumber: 2,
    type: "chapter",
    title: "Chapter 2: The Assignment from God",
    subtitle: "Yesterday’s Obedience Is Not Today’s Shield",
    themeSummary: "God's commands are safeguards connected to destiny; conviction without consistency collapses.",
    illustrationType: "scripture",
    pdfPages: [6],
    blocks: [
      {
        type: "heading",
        text: "Chapter 2: The Assignment from God"
      },
      {
        type: "paragraph",
        text: "Every divine assignment requires obedience. God does not give instructions casually. His commands are connected to protection, purpose, and destiny."
      },
      {
        type: "paragraph",
        text: "The young prophet’s assignment seemed simple. Deliver the message and leave without eating or drinking. Yet hidden within that instruction was a test of loyalty."
      },
      {
        type: "paragraph",
        text: "Many believers underestimate the seriousness of God’s commands because they focus only on visible sins. But disobedience often begins with small compromises. God’s instructions are not burdensome restrictions; they are safeguards."
      },
      {
        type: "paragraph",
        text: "When God tells someone not to go somewhere, not to associate with certain influences, or not to participate in certain activities, He sees dangers that human eyes cannot see."
      },
      {
        type: "paragraph",
        text: "Modern culture encourages people to question every authority except popular opinion. But God expects obedience rooted in trust."
      },
      {
        type: "paragraph",
        text: "The young prophet initially understood this. He resisted the king’s invitation because he valued God’s word more than royal favor. He had conviction."
      },
      {
        type: "quote",
        text: "Yet conviction without consistency eventually collapses. Many believers begin strong but finish poorly because they stop guarding their hearts. Spiritual success in one moment does not guarantee victory in the next.",
        author: "Lesson on Consistency"
      },
      {
        type: "callout",
        text: "The lesson is clear: never assume that yesterday’s obedience is enough for today’s battle."
      }
    ]
  },
  {
    id: "ch-3",
    chapterNumber: 3,
    type: "chapter",
    title: "Chapter 3: Jeroboam and the Corrupt Altar",
    subtitle: "Confronting Counterfeit Worship and Altars",
    themeSummary: "When leadership is corrupted by pride, alternative moral systems are invented to replace divine truth.",
    illustrationType: "altar",
    pdfPages: [7],
    blocks: [
      {
        type: "heading",
        text: "Chapter 3: Jeroboam and the Corrupt Altar"
      },
      {
        type: "paragraph",
        text: "Jeroboam represents leadership corrupted by pride and insecurity. Instead of leading the people toward God, he created alternative worship systems to maintain political power. He built altars that God never commanded."
      },
      {
        type: "paragraph",
        text: "This mirrors modern society in alarming ways. Many institutions now create versions of truth that suit human desires rather than divine standards. People invent moral systems that remove accountability and redefine sin."
      },
      {
        type: "paragraph",
        text: "The corrupt altar symbolizes counterfeit worship. Today there are many altars:"
      },
      {
        type: "bullet",
        items: [
          "The altar of fame",
          "The altar of money",
          "The altar of self-worship",
          "The altar of sexual immorality",
          "The altar of political ideology",
          "The altar of entertainment",
          "The altar of social approval"
        ]
      },
      {
        type: "paragraph",
        text: "Anything that replaces God becomes an altar. Jeroboam’s altar looked religious, but it was rooted in rebellion. This is why discernment matters. Not everything spiritual is godly."
      },
      {
        type: "quote",
        text: "Many modern deceptions wear religious clothing. False teachings often sound compassionate, progressive, intellectual, or inspirational while quietly leading people away from biblical truth.",
        author: "Spiritual Discernment"
      },
      {
        type: "callout",
        text: "The young prophet was sent to confront corruption, not cooperate with it. Believers today must also confront deception with courage."
      }
    ]
  },
  {
    id: "ch-4",
    chapterNumber: 4,
    type: "chapter",
    title: "Chapter 4: The Power of Clear Instructions",
    subtitle: "Partial Obedience Is Delayed Rebellion",
    themeSummary: "The young prophet knew God's will with absolute precision; confusion only entered when compromise was entertained.",
    illustrationType: "scripture",
    pdfPages: [7, 8],
    blocks: [
      {
        type: "heading",
        text: "Chapter 4: The Power of Clear Instructions"
      },
      {
        type: "paragraph",
        text: "One of the striking elements of the story is how clear God’s command was. There was no confusion. The prophet knew exactly what God said."
      },
      {
        type: "paragraph",
        text: "This destroys the excuse many people use when they disobey. Often the issue is not lack of understanding but lack of surrender."
      },
      {
        type: "paragraph",
        text: "God’s Word is clearer than many people admit. The Bible warns against immorality, greed, bitterness, idolatry, pride, deception, and false teaching. Yet many attempt to reinterpret Scripture in order to fit cultural trends."
      },
      {
        type: "quote",
        text: "The danger of this generation is not merely ignorance of truth but resistance to truth. Clear instructions demand clear obedience. When God speaks, believers must not negotiate.",
        author: "Principles of Obedience"
      },
      {
        type: "paragraph",
        text: "Partial obedience is delayed rebellion. The young prophet’s downfall began when he treated God’s instruction as flexible instead of final."
      },
      {
        type: "callout",
        text: "That same mindset destroys many lives today. People compromise in relationships, business, ministry, and morality because they convince themselves that “a small exception” will not matter. But truth does not change because emotions change."
      }
    ]
  },
  {
    id: "ch-5",
    chapterNumber: 5,
    type: "chapter",
    title: "Chapter 5: When Truth Confronts Culture",
    subtitle: "Standing Alone in Bethel",
    themeSummary: "Speaking God's truth often feels offensive in the short term, but lies destroy permanently.",
    illustrationType: "armor",
    pdfPages: [8],
    blocks: [
      {
        type: "heading",
        text: "Chapter 5: When Truth Confronts Culture"
      },
      {
        type: "paragraph",
        text: "The prophet walked into Bethel carrying a message that contradicted the culture around him. Everyone around Jeroboam’s altar accepted the corruption except the prophet."
      },
      {
        type: "paragraph",
        text: "Standing for truth often means standing alone. Modern believers face enormous pressure to remain silent about biblical convictions. Society labels truth as hateful when truth exposes sin."
      },
      {
        type: "quote",
        text: "Yet truth spoken in love is still necessary. The prophet’s courage demonstrates that obedience to God sometimes requires confrontation.",
        author: "Courage in Culture"
      },
      {
        type: "paragraph",
        text: "Many churches avoid difficult subjects because they fear losing popularity. But avoiding truth does not protect people; it leaves them vulnerable."
      },
      {
        type: "paragraph",
        text: "A doctor who hides a diagnosis does not help the patient. Likewise, spiritual leaders who refuse to address deception fail the people they serve."
      },
      {
        type: "callout",
        text: "Truth may offend temporarily, but lies destroy permanently."
      }
    ]
  },
  {
    id: "ch-6",
    chapterNumber: 6,
    type: "chapter",
    title: "Chapter 6: The Old Prophet Appears",
    subtitle: "Compromise in Trusted Voices",
    themeSummary: "The most dangerous deception does not come from outward enemies, but from respected, spiritual-sounding personalities.",
    illustrationType: "tree",
    pdfPages: [9],
    blocks: [
      {
        type: "heading",
        text: "Chapter 6: The Old Prophet Appears"
      },
      {
        type: "paragraph",
        text: "The entrance of the old prophet changes the entire story. This older man knew about God. He understood prophetic language. He recognized spiritual authority. Yet instead of strengthening the young prophet, he deceived him."
      },
      {
        type: "paragraph",
        text: "This reveals a painful reality:"
      },
      {
        type: "bullet",
        items: [
          "Not everyone with spiritual experience is spiritually trustworthy.",
          "Some people maintain religious appearances while lacking integrity.",
          "The old prophet represents compromised spirituality.",
          "Perhaps he once walked closely with God but had become spiritually dull. Instead of honoring the young prophet’s obedience, he manipulated him.",
          "The enemy often uses familiar and respected voices to spread deception.",
          "Many believers expect lies to come from obvious enemies, but some of the most dangerous deception comes through trusted relationships."
        ]
      },
      {
        type: "quote",
        text: "This is why discernment must be rooted in God’s Word rather than personalities. A person can be charismatic and still deceptive. A person can sound spiritual and still be wrong. A person can have influence and still mislead others.",
        author: "Discernment Rule"
      },
      {
        type: "callout",
        text: "The young prophet failed because he trusted a human voice above God’s direct instruction."
      }
    ]
  },
  {
    id: "ch-7",
    chapterNumber: 7,
    type: "chapter",
    title: "Chapter 7: The Most Dangerous Lies Sound Spiritual",
    subtitle: "Fragments of Truth Wrapped in Religion",
    themeSummary: "Deception rarely begins with obvious evil; it arrives masked with 'an angel spoke to me'.",
    illustrationType: "deception",
    pdfPages: [9, 10],
    blocks: [
      {
        type: "heading",
        text: "Chapter 7: The Most Dangerous Lies Sound Spiritual"
      },
      {
        type: "paragraph",
        text: "The old prophet did not tempt the young prophet with obvious evil. He used spiritual language: “I am a prophet also as thou art,” and “An angel spake unto me.”"
      },
      {
        type: "paragraph",
        text: "This is how deception often works. The most dangerous lies contain fragments of truth wrapped in spiritual language. False teachers rarely begin with blatant heresy. They slowly twist the truth."
      },
      {
        type: "paragraph",
        text: "Satan quoted Scripture when tempting Jesus. Deception becomes powerful when it appears reasonable, compassionate, intellectual, or spiritually enlightened."
      },
      {
        type: "paragraph",
        text: "In modern times many teachings sound loving but contradict Scripture. Some preach a gospel without repentance. Others deny holiness, judgment, or absolute truth. Many people accept these teachings because they appeal to emotions. But sincerity does not equal truth. A lie believed sincerely is still a lie."
      },
      {
        type: "quote",
        text: "The young prophet should have asked one simple question: “Did God change His instruction to me personally?”",
        author: "The Essential Test"
      },
      {
        type: "callout",
        text: "If God had spoken directly, no secondary voice should have overridden that instruction. Believers today must learn to compare every teaching with Scripture."
      }
    ]
  },
  {
    id: "ch-8",
    chapterNumber: 8,
    type: "chapter",
    title: "Chapter 8: The Tragedy of Distracted Obedience",
    subtitle: "Vulnerability After Spiritual Victory",
    themeSummary: "The young prophet stopped to rest under an oak tree; spiritual fatigue often precedes carelessness.",
    illustrationType: "tree",
    pdfPages: [10, 11],
    blocks: [
      {
        type: "heading",
        text: "Chapter 8: The Tragedy of Distracted Obedience"
      },
      {
        type: "paragraph",
        text: "The young prophet’s downfall happened after his major victory. This is important. Many people are vulnerable after spiritual success because they relax their vigilance."
      },
      {
        type: "paragraph",
        text: "After confronting Jeroboam, perhaps the prophet felt emotionally exhausted. Maybe he felt relieved that the assignment was complete. Fatigue often weakens discernment."
      },
      {
        type: "quote",
        text: "That is why believers must remain spiritually alert. The enemy frequently attacks after moments of breakthrough. Some people survive persecution but fail during comfort.",
        author: "Spiritual Alertness"
      },
      {
        type: "paragraph",
        text: "The prophet stopped under a tree to rest. There is nothing wrong with resting, but resting spiritually can become dangerous when it leads to carelessness. Distraction often precedes deception."
      },
      {
        type: "callout",
        text: "This generation is deeply distracted. People are constantly entertained but rarely spiritually focused. Endless content consumption weakens discernment because minds become overloaded and hearts become numb. A distracted believer is easier to deceive."
      }
    ]
  },
  {
    id: "ch-9",
    chapterNumber: 9,
    type: "chapter",
    title: "Chapter 9: Why People Believe Lies",
    subtitle: "The Five Catalysts of Human Deception",
    themeSummary: "Inconvenience, charismatic personalities, overriding emotions, scriptural neglect, and cultural relativism make intelligent minds fall for lies.",
    illustrationType: "deception",
    pdfPages: [11],
    blocks: [
      {
        type: "heading",
        text: "Chapter 9: Why People Believe Lies"
      },
      {
        type: "paragraph",
        text: "Why do intelligent people believe in deception? The answer is complex, but several factors are common:"
      },
      {
        type: "paragraph",
        text: "First, people believe lies when truth becomes inconvenient. The young prophet was hungry and tired. The invitation to eat probably appealed to his physical needs."
      },
      {
        type: "paragraph",
        text: "Second, people believe lies when they trust personalities more than principles. The old prophet’s age and position influenced the younger man."
      },
      {
        type: "paragraph",
        text: "Third, people believe lies when emotions override conviction. Many people abandon biblical truth because they do not want conflict, rejection, or discomfort."
      },
      {
        type: "paragraph",
        text: "Fourth, people believe lies when they neglect Scripture. A believer who does not study God’s Word becomes dependent on other voices."
      },
      {
        type: "paragraph",
        text: "Fifth, people believe lies when culture normalizes deception. Today society celebrates relativism. People are taught that truth is subjective. But if truth becomes subjective, morality collapses."
      },
      {
        type: "bullet",
        items: [
          "Right and wrong lose meaning.",
          "Justice becomes inconsistent.",
          "Integrity becomes optional.",
          "Sin becomes acceptable."
        ]
      },
      {
        type: "callout",
        text: "The rejection of truth eventually produces chaos."
      }
    ]
  },
  {
    id: "ch-10",
    chapterNumber: 10,
    type: "chapter",
    title: "Chapter 10: Emotional Manipulation and False Authority",
    subtitle: "Testing Every Spirit Beyond Influence",
    themeSummary: "Manipulators twist spiritual language and demand blind loyalty. Healthy authority points toward God, not personalities.",
    illustrationType: "voices",
    pdfPages: [12],
    blocks: [
      {
        type: "heading",
        text: "Chapter 10: Emotional Manipulation and False Authority"
      },
      {
        type: "paragraph",
        text: "The old prophet used authority and emotion to manipulate the younger man. Manipulation is one of the enemy’s oldest weapons."
      },
      {
        type: "paragraph",
        text: "Manipulative people often:"
      },
      {
        type: "bullet",
        items: [
          "Twist spiritual language",
          "Use guilt and pressure",
          "Appeal to sympathy",
          "Exploit trust",
          "Claim special revelation",
          "Demand unquestioning loyalty"
        ]
      },
      {
        type: "paragraph",
        text: "This occurs in relationships, churches, politics, businesses, and families. Many abusive leaders survive because people fear questioning them. But biblical discernment requires testing every spirit. No leader is above God’s Word."
      },
      {
        type: "quote",
        text: "Healthy spiritual authority points people toward God, not toward blind dependence on human personalities.",
        author: "True Leadership"
      },
      {
        type: "callout",
        text: "The tragedy today is that many people follow influencers more closely than they follow Scripture. Celebrities, motivational speakers, internet personalities, and even preachers can shape beliefs more powerfully than the Bible. When emotional influence replaces truth, deception spreads rapidly."
      }
    ]
  },
  {
    id: "ch-11",
    chapterNumber: 11,
    type: "chapter",
    title: "Chapter 11: The Cost of One Wrong Decision",
    subtitle: "The Accumulation of Small Compromises",
    themeSummary: "Sin rarely announces its consequences at the beginning; one small meal derailed an entire destiny.",
    illustrationType: "lion",
    pdfPages: [12, 13],
    blocks: [
      {
        type: "heading",
        text: "Chapter 11: The Cost of One Wrong Decision"
      },
      {
        type: "paragraph",
        text: "The young prophet made one fatal choice. One decision changed everything. This does not mean God is cruel. It means obedience matters."
      },
      {
        type: "paragraph",
        text: "Many people underestimate the long-term consequences of compromise. A single lie can destroy:"
      },
      {
        type: "bullet",
        items: [
          "A marriage",
          "A ministry",
          "A reputation",
          "A family",
          "A business",
          "A nation"
        ]
      },
      {
        type: "paragraph",
        text: "History is filled with tragedies caused by deception. Wars have started through lies. Families have collapsed through lies. Churches have divided through lies. Nations have suffered because leaders manipulated truth."
      },
      {
        type: "callout",
        text: "Sin rarely announces its consequences at the beginning. The young prophet probably never imagined that one meal would lead to death. Likewise, many modern compromises appear harmless initially. But spiritual compromise accumulates."
      }
    ]
  },
  {
    id: "ch-12",
    chapterNumber: 12,
    type: "chapter",
    title: "Chapter 12: The Lion on the Road",
    subtitle: "Spiritual Accountability in a Careless World",
    themeSummary: "The lion did not devour the body nor harm the donkey—a divine sign that God's Word is never treated casually.",
    illustrationType: "lion",
    pdfPages: [13, 14],
    blocks: [
      {
        type: "heading",
        text: "Chapter 12: The Lion on the Road"
      },
      {
        type: "paragraph",
        text: "The lion that killed the prophet is one of the most mysterious details in the story. The lion did not eat the body. The donkey remained standing nearby. The scene itself became a sign of divine judgment."
      },
      {
        type: "paragraph",
        text: "The lion represents the seriousness of disobedience. God wanted Israel to understand that His Word could not be treated casually."
      },
      {
        type: "quote",
        text: "Modern society often mocks accountability. People believe actions have no consequences. But spiritual laws are real. Choices produce outcomes.",
        author: "Accountability Law"
      },
      {
        type: "paragraph",
        text: "The lion on the road reminds believers that deception leads to destruction. The enemy himself is described in Scripture as a roaring lion seeking whom he may devour."
      },
      {
        type: "callout",
        text: "When believers abandon truth, they expose themselves spiritually."
      }
    ]
  },
  {
    id: "ch-13",
    chapterNumber: 13,
    type: "chapter",
    title: "Chapter 13: Modern Lies in the Present Age",
    subtitle: "Informed Yet Deceived",
    themeSummary: "Sophisticated slogans reshape societies when moral clarity and character are abandoned.",
    illustrationType: "deception",
    pdfPages: [14],
    blocks: [
      {
        type: "heading",
        text: "Chapter 13: Modern Lies in the Present Age"
      },
      {
        type: "paragraph",
        text: "The modern world is filled with sophisticated deception. Some lies are moral. Some are political. Some are spiritual. Some are technological. Some are psychological. Many people no longer know how to separate truth from manipulation."
      },
      {
        type: "paragraph",
        text: "Common modern lies include:"
      },
      {
        type: "bullet",
        items: [
          "“Truth is relative.”",
          "“Follow your heart no matter what.”",
          "“Sin has no consequences.”",
          "“You can live without God.”",
          "“Popularity proves correctness.”",
          "“Success is more important than character.”",
          "“Feelings define reality.”",
          "“You do not need repentance.”"
        ]
      },
      {
        type: "paragraph",
        text: "These lies reshape societies. When truth disappears, confusion multiplies. People become spiritually empty even while surrounded by information."
      },
      {
        type: "callout",
        text: "Technology has increased access to knowledge but not necessarily wisdom. Many are informed yet deceived."
      }
    ]
  },
  {
    id: "ch-14",
    chapterNumber: 14,
    type: "chapter",
    title: "Chapter 14: False Prophets in Modern Times",
    subtitle: "Polished Communicators with Empty Doctrines",
    themeSummary: "False teachers rarely look dangerous; like the Bereans, believers must test every teaching daily against Scripture.",
    illustrationType: "prophet",
    pdfPages: [14, 15],
    blocks: [
      {
        type: "heading",
        text: "Chapter 14: False Prophets in Modern Times"
      },
      {
        type: "paragraph",
        text: "Jesus warned repeatedly about false prophets. False prophets are not always obvious cult leaders. Sometimes they are polished communicators with large audiences."
      },
      {
        type: "paragraph",
        text: "A false prophet may:"
      },
      {
        type: "bullet",
        items: [
          "Preach without biblical foundation",
          "Prioritize popularity over truth",
          "Avoid repentance and holiness",
          "Manipulate people financially",
          "Use fear or flattery to control others",
          "Twist Scripture for personal gain"
        ]
      },
      {
        type: "paragraph",
        text: "The existence of false prophets does not mean believers should reject all spiritual leadership. It means believers must exercise discernment. Every message should be tested against Scripture."
      },
      {
        type: "quote",
        text: "The Bereans in the book of Acts searched the Scriptures daily to verify what they heard. Modern believers must do the same.",
        author: "Acts 17:11 Pattern"
      },
      {
        type: "callout",
        text: "Blind loyalty creates vulnerable followers. God never intended believers to abandon discernment."
      }
    ]
  },
  {
    id: "ch-15",
    chapterNumber: 15,
    type: "chapter",
    title: "Chapter 15: Social Media and Digital Deception",
    subtitle: "Outrage Algorithms and Curated Lives",
    themeSummary: "Emotional falsehoods spread faster than careful truth; digital discernment is essential for survival.",
    illustrationType: "voices",
    pdfPages: [15, 16],
    blocks: [
      {
        type: "heading",
        text: "Chapter 15: Social Media and Digital Deception"
      },
      {
        type: "paragraph",
        text: "Social media has transformed communication globally. It can spread truth, encouragement, and education. But it also spreads lies at unprecedented speed."
      },
      {
        type: "paragraph",
        text: "False information travels quickly because emotional content spreads faster than careful truth. Algorithms reward outrage, controversy, and sensationalism. Many people now form beliefs based on headlines rather than careful study."
      },
      {
        type: "paragraph",
        text: "Digital deception affects politics, religion, relationships, mental health, identity, and morality. People compare their lives with edited versions of others. Young people especially face intense pressure from online culture. Many feel forced to conform in order to gain acceptance."
      },
      {
        type: "quote",
        text: "The danger is that constant exposure to deception gradually normalizes it. Believers must learn digital discernment.",
        author: "Digital Wisdom"
      },
      {
        type: "bullet",
        items: [
          "Not every viral message deserves belief.",
          "Not every influencer deserves trust.",
          "Not every trending idea reflects the truth."
        ]
      }
    ]
  },
  {
    id: "ch-16",
    chapterNumber: 16,
    type: "chapter",
    title: "Chapter 16: The Spirit of Compromise",
    subtitle: "Concessions That Slowly Reshape Convictions",
    themeSummary: "Few abandon truth overnight; small concessions make spiritual compromise habitual.",
    illustrationType: "armor",
    pdfPages: [16, 17],
    blocks: [
      {
        type: "heading",
        text: "Chapter 16: The Spirit of Compromise"
      },
      {
        type: "paragraph",
        text: "Compromise often begins subtly. Few people wake up intending to abandon the truth completely. Instead, small concessions slowly reshape convictions."
      },
      {
        type: "paragraph",
        text: "The young prophet did not initially reject God’s command. He simply made an exception. That exception became fatal."
      },
      {
        type: "paragraph",
        text: "Modern believers face compromise daily. Compromise appears when:"
      },
      {
        type: "bullet",
        items: [
          "Integrity is sacrificed for success",
          "Convictions are abandoned for acceptance",
          "Silence replaces courage",
          "Entertainment replaces holiness",
          "Comfort replaces obedience"
        ]
      },
      {
        type: "quote",
        text: "A compromising culture pressures believers to adapt continuously. But truth cannot survive where compromise becomes habitual.",
        author: "On Compromise"
      },
      {
        type: "callout",
        text: "The church must resist the temptation to dilute truth for popularity. A watered-down gospel cannot transform lives."
      }
    ]
  },
  {
    id: "ch-17",
    chapterNumber: 17,
    type: "chapter",
    title: "Chapter 17: When Convenience Replaces Conviction",
    subtitle: "The Illusion of Instant Spirituality",
    themeSummary: "The old prophet offered food, rest, and comfort; convenience often weakens divine discipline.",
    illustrationType: "tree",
    pdfPages: [17],
    blocks: [
      {
        type: "heading",
        text: "Chapter 17: When Convenience Replaces Conviction"
      },
      {
        type: "paragraph",
        text: "The old prophet’s invitation offered comfort: Rest, Food, Fellowship. Convenience often weakens conviction. Many believers choose easier paths instead of obedient paths."
      },
      {
        type: "paragraph",
        text: "Yet spiritual growth frequently requires sacrifice. Jesus taught that following Him involves denying self. Modern culture promotes convenience above discipline."
      },
      {
        type: "paragraph",
        text: "People want instant success, instant pleasure, instant answers, and instant spirituality. But genuine spiritual maturity develops through consistency, prayer, study, humility, and obedience."
      },
      {
        type: "callout",
        text: "When convenience becomes the highest value, truth becomes negotiable."
      }
    ]
  },
  {
    id: "ch-18",
    chapterNumber: 18,
    type: "chapter",
    title: "Chapter 18: The Danger of Half-Truths",
    subtitle: "The Most Believable Deceptions",
    themeSummary: "Half-truths contain just enough truth to sound spiritual while silently distorting God's commandments.",
    illustrationType: "deception",
    pdfPages: [17, 18],
    blocks: [
      {
        type: "heading",
        text: "Chapter 18: The Danger of Half-Truths"
      },
      {
        type: "paragraph",
        text: "Half-truths are especially dangerous because they contain enough truth to appear believable. The old prophet claimed angelic revelation. That sounded spiritual. But spiritual claims must still be tested."
      },
      {
        type: "paragraph",
        text: "Many modern ideologies mix truth with error. Some movements speak about love while rejecting holiness. Others speak about justice while encouraging hatred. Some preach grace without repentance. Others preach success without sacrifice."
      },
      {
        type: "quote",
        text: "Half-truths deceive because they appeal to emotions while quietly distorting reality. Believers must learn to examine teachings carefully.",
        author: "Discernment Insight"
      },
      {
        type: "callout",
        text: "Discernment requires more than emotional reactions. It requires biblical understanding."
      }
    ]
  },
  {
    id: "ch-19",
    chapterNumber: 19,
    type: "chapter",
    title: "Chapter 19: Discernment in the Last Days",
    subtitle: "The Four Essential Diagnostic Questions",
    themeSummary: "Discernment is spiritual sensitivity, biblical knowledge, and humility guarding believers from confusion.",
    illustrationType: "armor",
    pdfPages: [18, 19],
    blocks: [
      {
        type: "heading",
        text: "Chapter 19: Discernment in the Last Days"
      },
      {
        type: "paragraph",
        text: "Scripture warns that deception will increase in the last days. Discernment is therefore not optional. Discernment is the ability to recognize truth from error. It involves spiritual sensitivity, biblical knowledge, wisdom, humility, and dependence on the Holy Spirit."
      },
      {
        type: "paragraph",
        text: "Discernment protects believers from false doctrine, manipulation, counterfeit spirituality, moral compromise, and cultural pressure. Without discernment, people become spiritually unstable."
      },
      {
        type: "paragraph",
        text: "Every believer should ask:"
      },
      {
        type: "bullet",
        items: [
          "Does this align with Scripture?",
          "Does this glorify God?",
          "Does this encourage holiness?",
          "Does this produce truth or confusion?"
        ]
      },
      {
        type: "callout",
        text: "Discernment grows through intimacy with God. People who know God deeply are less likely to be deceived."
      }
    ]
  },
  {
    id: "ch-20",
    chapterNumber: 20,
    type: "chapter",
    title: "Chapter 20: Testing Every Voice",
    subtitle: "Critical Discernment Is Not Faithlessness",
    themeSummary: "Faith is not intellectual laziness; John commanded believers to test the spirits before trusting them.",
    illustrationType: "voices",
    pdfPages: [19],
    blocks: [
      {
        type: "heading",
        text: "Chapter 20: Testing Every Voice"
      },
      {
        type: "paragraph",
        text: "The world is filled with voices competing for attention: News outlets, Influencers, Politicians, Teachers, Preachers, Celebrities, Friends. Every voice carries influence. The question is not whether voices exist but whether they are trustworthy."
      },
      {
        type: "paragraph",
        text: "The apostle John instructed believers to test the spirits. Testing means evaluating messages instead of accepting them blindly."
      },
      {
        type: "paragraph",
        text: "The young prophet failed to test the old prophet’s claim. He accepted the statement because it sounded spiritual. Believers today must not surrender critical discernment."
      },
      {
        type: "callout",
        text: "Faith is not intellectual laziness. Biblical faith values truth deeply."
      }
    ]
  },
  {
    id: "ch-21",
    chapterNumber: 21,
    type: "chapter",
    title: "Chapter 21: The Importance of Personal Conviction",
    subtitle: "Surviving the Subtle Pressures of Life",
    themeSummary: "The young prophet resisted a king in public but surrendered to subtle persuasion in private.",
    illustrationType: "armor",
    pdfPages: [19, 20],
    blocks: [
      {
        type: "heading",
        text: "Chapter 21: The Importance of Personal Conviction"
      },
      {
        type: "paragraph",
        text: "Conviction is essential in a deceptive age. Conviction means holding firmly to truth regardless of pressure. The young prophet originally possessed conviction. He resisted a king. But later he lost resolve under a different kind of pressure."
      },
      {
        type: "paragraph",
        text: "Some people can resist open temptation but fall through subtle persuasion. Strong conviction develops through:"
      },
      {
        type: "bullet",
        items: [
          "Prayer",
          "Scripture study",
          "Obedience",
          "Spiritual discipline",
          "Fellowship with mature believers"
        ]
      },
      {
        type: "callout",
        text: "People without conviction are easily shaped by culture. Every generation faces pressure to compromise. Those who survive spiritually are those who remain anchored in truth."
      }
    ]
  },
  {
    id: "ch-22",
    chapterNumber: 22,
    type: "chapter",
    title: "Chapter 22: The Role of Prayer and Scripture",
    subtitle: "Deep Roots in a Noisy World",
    themeSummary: "A weak prayer life produces weak discernment; a neglected Bible creates spiritual confusion.",
    illustrationType: "scripture",
    pdfPages: [20],
    blocks: [
      {
        type: "heading",
        text: "Chapter 22: The Role of Prayer and Scripture"
      },
      {
        type: "paragraph",
        text: "Prayer and Scripture are essential defenses against deception. Prayer keeps believers connected to God. Scripture renews the mind. Jesus resisted Satan by quoting Scripture."
      },
      {
        type: "paragraph",
        text: "Many believers struggle with deception because they neglect spiritual disciplines. A weak prayer life produces weak discernment. A neglected Bible produces spiritual confusion."
      },
      {
        type: "quote",
        text: "The modern world is noisy. People consume endless content but spend little time listening to God.",
        author: "Spiritual Grounding"
      },
      {
        type: "callout",
        text: "Without spiritual grounding, believers become vulnerable to every trend and ideology. Truth must become deeply rooted in the heart."
      }
    ]
  },
  {
    id: "ch-23",
    chapterNumber: 23,
    type: "chapter",
    title: "Chapter 23: Young People and the Battle for Truth",
    subtitle: "Protecting Passion and Calling",
    themeSummary: "The enemy targets youth because they shape the future; passion without discernment leads to vulnerability.",
    illustrationType: "prophet",
    pdfPages: [21],
    blocks: [
      {
        type: "heading",
        text: "Chapter 23: Young People and the Battle for Truth"
      },
      {
        type: "paragraph",
        text: "Young people today face enormous pressure. They are growing up in a culture that constantly questions identity, morality, gender, purpose, and truth. Many are searching for meaning while surrounded by conflicting messages."
      },
      {
        type: "paragraph",
        text: "The enemy aggressively targets young minds because youth shapes the future. The story of the young prophet is especially relevant because it shows how youth can possess passion and calling yet still become vulnerable to deception."
      },
      {
        type: "paragraph",
        text: "Young believers must learn:"
      },
      {
        type: "bullet",
        items: [
          "To value truth above popularity",
          "To resist peer pressure",
          "To question deceptive ideologies",
          "To build strong spiritual foundations",
          "To seek godly mentorship"
        ]
      },
      {
        type: "callout",
        text: "The future depends heavily on whether young people embrace truth or surrender to deception."
      }
    ]
  },
  {
    id: "ch-24",
    chapterNumber: 24,
    type: "chapter",
    title: "Chapter 24: Parents, Leaders, and Responsibility",
    subtitle: "The Power and Peril of Influence",
    themeSummary: "When leaders preach truth publicly but live dishonestly privately, people become cynical.",
    illustrationType: "armor",
    pdfPages: [21],
    blocks: [
      {
        type: "heading",
        text: "Chapter 24: Parents, Leaders, and Responsibility"
      },
      {
        type: "paragraph",
        text: "Parents and leaders carry enormous responsibility. The old prophet influenced the younger man negatively. This reminds leaders that influence can either protect or destroy."
      },
      {
        type: "paragraph",
        text: "Parents must teach the truth intentionally. Church leaders must preach faithfully. Mentors must model integrity. A generation confused about truth needs examples of genuine faith."
      },
      {
        type: "quote",
        text: "Hypocrisy damages trust. When leaders preach truth publicly but live dishonestly privately, people become cynical. Integrity matters.",
        author: "Leadership Integrity"
      },
      {
        type: "callout",
        text: "The world does not need perfect leaders, but it desperately needs honest ones."
      }
    ]
  },
  {
    id: "ch-25",
    chapterNumber: 25,
    type: "chapter",
    title: "Chapter 25: Churches and the Crisis of Deception",
    subtitle: "The Pillar and Ground of Truth",
    themeSummary: "A church prioritizing entertainment over discipleship loses its transformative spiritual power.",
    illustrationType: "altar",
    pdfPages: [22],
    blocks: [
      {
        type: "heading",
        text: "Chapter 25: Churches and the Crisis of Deception"
      },
      {
        type: "paragraph",
        text: "Many churches today face pressure to adapt their message to culture. Some fear losing members if they preach difficult truths. Others prioritize entertainment over discipleship. Still others avoid controversial subjects entirely."
      },
      {
        type: "paragraph",
        text: "But a church that abandons truth loses its spiritual power. The church is called to be the pillar and ground of truth. Believers gather not merely for inspiration but for transformation. A church without biblical truth becomes spiritually weak."
      },
      {
        type: "paragraph",
        text: "Healthy churches:"
      },
      {
        type: "bullet",
        items: [
          "Teach Scripture faithfully",
          "Encourage repentance and holiness",
          "Practice love and accountability",
          "Equip believers with discernment",
          "Resist cultural compromise"
        ]
      },
      {
        type: "callout",
        text: "Truth and love must remain together. Love without truth becomes compromise. Truth without love becomes harshness. God calls believers to walk in both."
      }
    ]
  },
  {
    id: "ch-26",
    chapterNumber: 26,
    type: "chapter",
    title: "Chapter 26: Truth in an Age of Confusion",
    subtitle: "Humanity’s Unshakeable Anchor",
    themeSummary: "True freedom comes through alignment with God's truth; lies enslave under the disguise of rebellion.",
    illustrationType: "scripture",
    pdfPages: [22, 23],
    blocks: [
      {
        type: "heading",
        text: "Chapter 26: Truth in an Age of Confusion"
      },
      {
        type: "paragraph",
        text: "Confusion defines much of modern society. People debate basic realities that previous generations considered obvious. Moral confusion produces emotional instability. Spiritual confusion produces hopelessness. Political confusion produces division."
      },
      {
        type: "paragraph",
        text: "The absence of truth leaves people vulnerable. Jesus declared that truth brings freedom. Lies enslave. Many people pursue freedom through rebellion, yet discover emptiness instead."
      },
      {
        type: "quote",
        text: "True freedom comes through alignment with God’s truth. The young prophet lost freedom when he abandoned obedience. Likewise, societies that reject truth eventually experience disorder.",
        author: "Anchor of Truth"
      },
      {
        type: "callout",
        text: "Truth is not humanity’s enemy. Truth is humanity’s anchor."
      }
    ]
  },
  {
    id: "ch-27",
    chapterNumber: 27,
    type: "chapter",
    title: "Chapter 27: How to Recognize Spiritual Counterfeits",
    subtitle: "Seven Warning Signs of False Spirituality",
    themeSummary: "Genuine spirituality produces humility, holiness, love, and obedience rather than self-centered hype.",
    illustrationType: "deception",
    pdfPages: [23],
    blocks: [
      {
        type: "heading",
        text: "Chapter 27: How to Recognize Spiritual Counterfeits"
      },
      {
        type: "paragraph",
        text: "Counterfeit spirituality often imitates genuine faith. That is why discernment matters. Signs of spiritual counterfeits include:"
      },
      {
        type: "bullet",
        items: [
          "Messages centered on self instead of God",
          "Teachings disconnected from Scripture",
          "Manipulative leadership",
          "Pride disguised as spirituality",
          "Emotional hype without transformation",
          "Excuses for sinful behavior",
          "Obsession with fame, money, or power"
        ]
      },
      {
        type: "paragraph",
        text: "Counterfeits succeed because many people prefer comforting lies over challenging truth. Yet genuine spirituality produces humility, holiness, love, and obedience."
      },
      {
        type: "callout",
        text: "Believers must learn to recognize the difference."
      }
    ]
  },
  {
    id: "ch-28",
    chapterNumber: 28,
    type: "chapter",
    title: "Chapter 28: Recovering the Fear of God",
    subtitle: "Reverence Over Casual Religion",
    themeSummary: "The fear of God is not terror but profound reverence; when reverence disappears, compromise flourishes.",
    illustrationType: "altar",
    pdfPages: [23, 24],
    blocks: [
      {
        type: "heading",
        text: "Chapter 28: Recovering the Fear of God"
      },
      {
        type: "paragraph",
        text: "One reason deception spreads easily is that many people no longer fear God. The fear of God is not terror but reverence. It means recognizing God’s holiness, authority, and truth. A healthy fear of God protects believers from compromise."
      },
      {
        type: "paragraph",
        text: "The young prophet momentarily valued the old prophet’s words above God’s command. That misplaced reverence became disastrous."
      },
      {
        type: "quote",
        text: "Modern society often treats God casually. Sin is normalized. Holiness is mocked. Reverence disappears.",
        author: "On Reverence"
      },
      {
        type: "callout",
        text: "Spiritual health begins when people honor God above culture, emotions, and human opinions."
      }
    ]
  },
  {
    id: "ch-29",
    chapterNumber: 29,
    type: "chapter",
    title: "Chapter 29: Obedience Above Popularity",
    subtitle: "Private Compromise Destroys Public Courage",
    themeSummary: "Character matters most when nobody is watching; truth never depended on majority approval.",
    illustrationType: "armor",
    pdfPages: [24],
    blocks: [
      {
        type: "heading",
        text: "Chapter 29: Obedience Above Popularity"
      },
      {
        type: "paragraph",
        text: "Many people abandon truth because they desire acceptance. Popularity can become an idol. The pressure to fit in affects all age groups. People fear criticism, rejection, and isolation."
      },
      {
        type: "paragraph",
        text: "But obedience to God sometimes requires standing against public opinion. The prophets, apostles, and early Christians often stood alone. Truth has never depended on majority approval."
      },
      {
        type: "paragraph",
        text: "The young prophet initially demonstrated courage before a king. Yet later he yielded to personal persuasion. This reminds believers that private compromise can destroy public courage."
      },
      {
        type: "callout",
        text: "Character matters even when nobody is watching."
      }
    ]
  },
  {
    id: "ch-30",
    chapterNumber: 30,
    type: "chapter",
    title: "Chapter 30: Standing Alone for Truth",
    subtitle: "The Cloud of Faithful Witnesses",
    themeSummary: "Noah, Daniel, Elijah, and Jesus stood against corrupt cultures; eternal rewards belong to the faithful.",
    illustrationType: "armor",
    pdfPages: [24, 25],
    blocks: [
      {
        type: "heading",
        text: "Chapter 30: Standing Alone for Truth"
      },
      {
        type: "paragraph",
        text: "Standing for truth can feel lonely. Many believers experience isolation because they refuse to compromise. Students may face ridicule. Employees may face pressure. Leaders may face criticism."
      },
      {
        type: "paragraph",
        text: "Yet throughout Scripture, God honors those who remain faithful: Noah stood against corruption. Daniel stood against idolatry. Elijah stood against false prophets. Jesus stood against hypocrisy."
      },
      {
        type: "quote",
        text: "Truth often requires courage. The world respects compromise more than conviction. But eternal rewards belong to those who remain faithful.",
        author: "Courage in Truth"
      },
      {
        type: "callout",
        text: "Believers must remember that God’s approval matters more than human applause."
      }
    ]
  },
  {
    id: "ch-31",
    chapterNumber: 31,
    type: "chapter",
    title: "Chapter 31: The Mercy of God Despite Human Failure",
    subtitle: "The Redemptive Heart of the Cross",
    themeSummary: "Even in the sorrow of judgment, God's heart desires repentance and restoration through Jesus Christ.",
    illustrationType: "mercy",
    pdfPages: [25],
    blocks: [
      {
        type: "heading",
        text: "Chapter 31: The Mercy of God Despite Human Failure"
      },
      {
        type: "paragraph",
        text: "Although the story ends tragically, it also reveals God’s seriousness about truth. The old prophet mourned the younger man’s death. Even in judgment, there is sorrow. God does not delight in destruction. He warns because He desires repentance."
      },
      {
        type: "paragraph",
        text: "Many people have believed lies and wandered from truth. Yet God still offers mercy through repentance. The cross itself demonstrates God’s love for humanity."
      },
      {
        type: "quote",
        text: "Jesus came to rescue people from sin, deception, and spiritual death. No matter how confused society becomes, God still calls people toward truth.",
        author: "God's Heart of Mercy"
      },
      {
        type: "callout",
        text: "Hope remains available for those willing to repent and return."
      }
    ]
  },
  {
    id: "ch-32",
    chapterNumber: 32,
    type: "chapter",
    title: "Chapter 32: Lessons from the Grave of the Prophet",
    subtitle: "Finishing Well in the Christian Walk",
    themeSummary: "A poignant tomb in Bethel reminding all generations that starting passionately is not enough—finishing faithfully matters.",
    illustrationType: "tree",
    pdfPages: [26],
    blocks: [
      {
        type: "heading",
        text: "Chapter 32: Lessons from the Grave of the Prophet"
      },
      {
        type: "paragraph",
        text: "The prophet’s grave became a testimony. His life warns future generations about the danger of abandoning God’s Word."
      },
      {
        type: "paragraph",
        text: "Several lessons emerge clearly:"
      },
      {
        type: "bullet",
        items: [
          "1. Obedience must remain consistent.",
          "2. Spiritual titles do not guarantee truth.",
          "3. Discernment is essential.",
          "4. One compromise can have devastating consequences.",
          "5. God’s Word must remain final authority."
        ]
      },
      {
        type: "paragraph",
        text: "The story is painful because the prophet began well. Many people begin their spiritual journey passionately but later drift. Finishing well matters."
      },
      {
        type: "callout",
        text: "Believers must remain humble and watchful throughout life."
      }
    ]
  },
  {
    id: "ch-33",
    chapterNumber: 33,
    type: "chapter",
    title: "Chapter 33: Practical Steps to Avoid Deception",
    subtitle: "Ten Biblical Safeguards for Daily Life",
    themeSummary: "Actionable spiritual disciplines to remain rooted, discerning, and protected from the spirit of compromise.",
    illustrationType: "armor",
    pdfPages: [26, 27],
    blocks: [
      {
        type: "heading",
        text: "Chapter 33: Practical Steps to Avoid Deception"
      },
      {
        type: "paragraph",
        text: "In a deceptive age, believers need practical safeguards. Here are important steps:"
      },
      {
        type: "bullet",
        items: [
          "1. Study Scripture Consistently — Truth becomes easier to recognize when believers know God’s Word deeply.",
          "2. Maintain a Strong Prayer Life — Prayer strengthens spiritual sensitivity.",
          "3. Test Every Teaching — Never accept teachings blindly because of charisma or popularity.",
          "4. Stay Humble — Pride blinds people spiritually.",
          "5. Avoid Compromise — Small compromises often lead to larger failures.",
          "6. Seek Godly Community — Healthy fellowship provides accountability and wisdom.",
          "7. Guard Your Mind — Be careful about what influences your thinking.",
          "8. Value Truth Above Emotions — Feelings change, but truth remains.",
          "9. Listen to the Holy Spirit — God still guides believers through His Spirit.",
          "10. Remain Watchful — Spiritual vigilance is necessary throughout life."
        ]
      },
      {
        type: "callout",
        text: "These practices help believers remain grounded in truth."
      }
    ]
  },
  {
    id: "conclusion",
    type: "conclusion",
    title: "Conclusion: Choose Truth Before It Is Too Late",
    subtitle: "The Timeless Call to Uncompromised Faith",
    themeSummary: "The eternal difference between hearing God's Word and guarding it with steadfast conviction.",
    illustrationType: "mercy",
    pdfPages: [27, 28],
    blocks: [
      {
        type: "heading",
        text: "Conclusion: Choose Truth Before It Is Too Late"
      },
      {
        type: "paragraph",
        text: "The story of the old and young prophet is more than an ancient narrative. It is a warning for every generation."
      },
      {
        type: "paragraph",
        text: "We live in an era overflowing with voices, opinions, ideologies, and spiritual confusion. Lies are sophisticated, emotional, persuasive, and widespread. Many people no longer recognize deception because they have become accustomed to compromise. Yet God still calls His people to truth."
      },
      {
        type: "paragraph",
        text: "The young prophet’s tragedy teaches that knowing truth is not enough. Truth must be obeyed."
      },
      {
        type: "paragraph",
        text: "Many today are like the young prophet: Called by God, Gifted, Passionate, Courageous — yet vulnerable because they fail to guard their convictions carefully."
      },
      {
        type: "quote",
        text: "The enemy still whispers: “Did God really say?” That question has echoed since Eden. The survival of faith depends on whether believers trust God’s Word above every competing voice.",
        author: "Genesis 3 Warning"
      },
      {
        type: "paragraph",
        text: "In the end, truth is not merely a concept. Truth is rooted in the character of God."
      },
      {
        type: "scripture",
        text: "Jesus declared: “I am the way, the truth, and the life.”",
        reference: "John 14:6"
      },
      {
        type: "paragraph",
        text: "Only truth can set people free. Only truth can preserve souls in a deceptive age. Only truth can lead humanity safely through confusion."
      },
      {
        type: "callout",
        text: "Therefore choose truth. Choose obedience. Choose discernment. Choose conviction. And never exchange God’s voice for a lie."
      }
    ]
  },
  {
    id: "prayer",
    type: "prayer",
    title: "Final Prayer",
    subtitle: "A Generational Prayer for Discernment & Integrity",
    themeSummary: "A solemn prayer consecrating minds, hearts, and leaders to walk in righteousness until the end.",
    illustrationType: "prayer",
    pdfPages: [28, 29],
    blocks: [
      {
        type: "heading",
        text: "Final Prayer"
      },
      {
        type: "quote",
        text: "Heavenly Father,\n\nHelp us to live in truth in a world filled with deception. Give us discernment to recognize lies and courage to obey Your Word completely. Protect our minds, hearts, and spirits from false teachings and compromise. Teach us to value truth above popularity, comfort, and human approval.\n\nStrengthen this generation to stand firmly for righteousness. Raise leaders who speak truth faithfully and believers who walk in integrity. May we never abandon Your voice for the opinions of men.\n\nLead us by Your Spirit and keep us faithful until the end.\n\nIn Jesus’ name, Amen.",
        author: "Benediction"
      }
    ]
  }
];

// PDF Page mapping (1 to 41) with each chapter starting cleanly at the top of its page
export const PDF_PAGES: BookPage[] = [
  {
    pageNumber: 1,
    title: "Title & Dedication",
    chapterId: "front-matter",
    isChapterStart: false,
    illustrationType: "tree",
    blocks: [
      {
        type: "heading",
        text: "The Danger of Believing Lies"
      },
      {
        type: "subheading",
        text: "Lessons from the Old and Young Prophet in 1 Kings 13 for This Generation"
      },
      {
        type: "paragraph",
        text: "Author: Pastor Cecilia Oluwatoyin Fayefunmi"
      },
      {
        type: "scripture",
        text: "“He said unto him, I am a prophet also as thou art; and an angel spake unto me by the word of the LORD... But he lied unto him.”",
        reference: "1 Kings 13:18"
      },
      {
        type: "quote",
        text: "Dedicated to every seeker of truth who refuses to surrender divine conviction for cultural applause, comfortable lies, or deceptive spiritual authority.",
        author: "Treatise Dedication"
      },
      {
        type: "callout",
        text: "A solemn 33-chapter study uncovering the architecture of spiritual deception and establishing unwavering biblical safeguards for today."
      }
    ]
  },
  {
    pageNumber: 2,
    title: "Copyright & Disclaimer",
    chapterId: "copyright-page",
    isChapterStart: false,
    blocks: [
      {
        type: "heading",
        text: "Copyright & Publishing Notice"
      },
      {
        type: "quote",
        text: "Copyright © 2026 Pastor Cecilia Oluwatoyin Fayefunmi\nAll Rights Reserved Worldwide.\nPublished in Vienna, Austria & Lagos, Nigeria.",
        author: "Legal Notice"
      },
      {
        type: "subheading",
        text: "Ministry & Theological Disclaimer"
      },
      {
        type: "paragraph",
        text: "This publication is intended solely for spiritual edification, biblical teaching, Christian discipleship, and personal ministry development. The scriptural expositions, doctrinal commentaries, and practical safeguards presented herein are grounded in the undiluted Word of God."
      },
      {
        type: "paragraph",
        text: "No part of this book may be reproduced, distributed, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, or otherwise—without prior written permission from the author and copyright holder, except for brief quotations used in theological reviews, sermons, and critical articles as permitted by international copyright law."
      },
      {
        type: "callout",
        text: "Scripture quotations are taken from the Holy Bible to inspire holy living, discernment, and unwavering loyalty to God's divine commands."
      }
    ]
  },
  {
    pageNumber: 3,
    title: "About the Author",
    chapterId: "author-page",
    isChapterStart: false,
    illustrationType: "scripture",
    blocks: [
      {
        type: "heading",
        text: "About Pastor Cecilia Oluwatoyin Fayefunmi"
      },
      {
        type: "subheading",
        text: "Teacher of God’s Word & Devotional Author"
      },
      {
        type: "paragraph",
        text: "Cecilia Fayefunmi is a teacher of Gods word. She is anointed by the Holy Spirit to preach the undiluted word of God and to impact the message of love and joy to the people of God. Under the inspiration of the Holy Spirit in 2010, she started writing devotionals titled Daily Grace which has been a source of inspiration to many."
      },
      {
        type: "paragraph",
        text: "She was born in Lagos, Nigeria. Lived in Lagos for a reasonable length of time and have a pleasant childhood with a lot of love from her family. She is compassionate, outgoing and very dedicated. Also she is a good listener and enjoys helping others. She believe in treating others the way, she would want to be treated."
      },
      {
        type: "paragraph",
        text: "She has been married to Evangelist Fayefunmi since 1982 and has three children. Cecilia lives in Vienna, Austria with her husband and children."
      },
      {
        type: "quote",
        text: "Other Books by Author:\n• “At the Throne of Grace” — A profound biblical guide on approaching God's presence in prayer.\n• “Daily Grace” — Inspiring Christian devotional series (since 2010).",
        author: "Publications & Works"
      }
    ]
  },
  {
    pageNumber: 4,
    title: "Table of Contents (Part I)",
    chapterId: "toc-1",
    blocks: [
      { type: "heading", text: "Table of Contents (Part I)" },
      { type: "paragraph", text: "• Dedication & Copyright Notice (Pages 1–2)" },
      { type: "paragraph", text: "• About Pastor Cecilia Fayefunmi & Other Books (Page 3)" },
      { type: "paragraph", text: "• Introduction: A Generation Surrounded by Lies (Page 6)" },
      { type: "paragraph", text: "• Chapter 1: The Story of the Young Prophet" },
      { type: "paragraph", text: "• Chapter 2: The Assignment from God" },
      { type: "paragraph", text: "• Chapter 3: Jeroboam and the Corrupt Altar" },
      { type: "paragraph", text: "• Chapter 4: The Power of Clear Instructions" },
      { type: "paragraph", text: "• Chapter 5: Standing for Truth in a Corrupt Culture" },
      { type: "paragraph", text: "• Chapter 6: The King's Invitation" },
      { type: "paragraph", text: "• Chapter 7: The Old Prophet of Bethel" },
      { type: "paragraph", text: "• Chapter 8: Resting Under the Oak" },
      { type: "paragraph", text: "• Chapter 9: Why People Believe Lies" },
      { type: "paragraph", text: "• Chapter 10: Emotional Manipulation and False Authority" },
      { type: "paragraph", text: "• Chapter 11: The Cost of One Wrong Decision" },
      { type: "paragraph", text: "• Chapter 12: The Lion on the Road" },
      { type: "paragraph", text: "• Chapter 13: Modern Lies in the Present Age" },
      { type: "paragraph", text: "• Chapter 14: False Prophets in Modern Times" }
    ]
  },
  {
    pageNumber: 5,
    title: "Table of Contents (Part II)",
    chapterId: "toc-2",
    blocks: [
      { type: "heading", text: "Table of Contents (Part II)" },
      { type: "paragraph", text: "• Chapter 15: Social Media and Digital Deception" },
      { type: "paragraph", text: "• Chapter 16: The Spirit of Compromise" },
      { type: "paragraph", text: "• Chapter 17: When Convenience Replaces Conviction" },
      { type: "paragraph", text: "• Chapter 18: The Danger of Half-Truths" },
      { type: "paragraph", text: "• Chapter 19: Discernment in the Last Days" },
      { type: "paragraph", text: "• Chapter 20: Testing Every Voice" },
      { type: "paragraph", text: "• Chapter 21: The Importance of Personal Conviction" },
      { type: "paragraph", text: "• Chapter 22: The Role of Prayer and Scripture" },
      { type: "paragraph", text: "• Chapter 23: Young People and the Battle for Truth" },
      { type: "paragraph", text: "• Chapter 24: Parents, Leaders, and Responsibility" },
      { type: "paragraph", text: "• Chapter 25: Churches and the Crisis of Deception" },
      { type: "paragraph", text: "• Chapter 26: Truth in an Age of Confusion" },
      { type: "paragraph", text: "• Chapter 27: How to Recognize Spiritual Counterfeits" },
      { type: "paragraph", text: "• Chapter 28: Recovering the Fear of God" },
      { type: "paragraph", text: "• Chapter 29: Obedience Above Popularity" },
      { type: "paragraph", text: "• Chapter 30: Standing Alone for Truth" },
      { type: "paragraph", text: "• Chapter 31: The Mercy of God Despite Human Failure" },
      { type: "paragraph", text: "• Chapter 32: Lessons from the Grave of the Prophet" },
      { type: "paragraph", text: "• Chapter 33: Practical Steps to Avoid Deception" },
      { type: "paragraph", text: "• Conclusion & Final Prayer (Page 41)" }
    ]
  },
  // All 36 chapters (Intro, 1-33, Conclusion, Prayer) starting cleanly at top of page 6 through 41
  ...BOOK_CHAPTERS.map((ch, idx) => ({
    pageNumber: idx + 6,
    title: ch.title,
    subtitle: ch.subtitle,
    chapterId: ch.id,
    isChapterStart: true,
    illustrationType: ch.id,
    blocks: ch.blocks
  }))
];

// Update BOOK_CHAPTERS pdfPages to point to [idx + 6]
BOOK_CHAPTERS.forEach((ch, idx) => {
  ch.pdfPages = [idx + 6];
});
