
window.onload = tellFortune;
/*
window.onload = tellFortune;
window.onload = pickRug; 
*/

var myCard = new Array(
  "card/1.jpg", "card/2.jpg", "card/3.jpg", "card/4.jpg", "card/5.jpg",
  "card/6.jpg", "card/7.jpg", "card/8.jpg", "card/9.jpg", "card/10.jpg",
  "card/11.jpg", "card/12.jpg", "card/13.jpg", "card/14.jpg", "card/15.jpg",
  "card/16.jpg", "card/17.jpg", "card/18.jpg", "card/19.jpg", "card/20.jpg",
  "card/21.jpg", "card/22.jpg", "card/23.jpg", "card/24.jpg", "card/25.jpg",
  "card/26.jpg", "card/27.jpg", "card/28.jpg", "card/29.jpg", "card/30.jpg",
  "card/31.jpg", "card/32.jpg", "card/33.jpg", "card/34.jpg", "card/35.jpg",
  "card/36.jpg", "card/37.jpg", "card/38.jpg", "card/39.jpg", "card/40.jpg",
  "card/41.jpg", "card/42.jpg", "card/43.jpg", "card/44.jpg", "card/45.jpg",
  "card/46.jpg", "card/47.jpg", "card/48.jpg", "card/49.jpg", "card/50.jpg",
  "card/51.jpg", "card/52.jpg", "card/53.jpg", "card/54.jpg", "card/55.jpg",
  "card/56.jpg", "card/57.jpg", "card/58.jpg", "card/59.jpg", "card/60.jpg",
  "card/61.jpg", "card/62.jpg", "card/63.jpg", "card/64.jpg", "card/65.jpg",
  "card/66.jpg", "card/67.jpg", "card/68.jpg", "card/69.jpg", "card/70.jpg",
  "card/71.jpg", "card/72.jpg", "card/73.jpg", "card/74.jpg", "card/75.jpg",
  "card/76.jpg", "card/77.jpg", "card/78.jpg", "card/79.jpg", "card/80.jpg",
  "card/81.jpg", "card/82.jpg", "card/83.jpg", "card/84.jpg", "card/85.jpg",
  "card/86.jpg", "card/87.jpg", "card/88.jpg", "card/89.jpg", "card/90.jpg",
  "card/91.jpg", "card/92.jpg", "card/93.jpg", "card/94.jpg", "card/95.jpg",
  "card/96.jpg", "card/97.jpg", "card/98.jpg", "card/99.jpg", "card/100.jpg",
  "card/101.jpg", "card/102.jpg", "card/103.jpg", "card/104.jpg", "card/105.jpg",
  "card/106.jpg", "card/107.jpg", "card/108.jpg", "card/109.jpg", "card/110.jpg",
  "card/111.jpg", "card/112.jpg", "card/113.jpg", "card/114.jpg", "card/115.jpg",
  "card/116.jpg", "card/117.jpg", "card/118.jpg", "card/119.jpg", "card/120.jpg",
  "card/121.jpg", "card/122.jpg", "card/123.jpg", "card/124.jpg", "card/125.jpg",
  "card/126.jpg", "card/127.jpg", "card/128.jpg", "card/129.jpg", "card/130.jpg",
  "card/131.jpg", "card/132.jpg", "card/133.jpg", "card/134.jpg", "card/135.jpg",
  "card/136.jpg", "card/137.jpg", "card/138.jpg", "card/139.jpg", "card/140.jpg",
  "card/141.jpg", "card/142.jpg", "card/143.jpg", "card/144.jpg", "card/145.jpg",
  "card/146.jpg", "card/147.jpg", "card/148.jpg", "card/149.jpg", "card/150.jpg",
  "card/151.jpg", "card/152.jpg", "card/153.jpg", "card/154.jpg", "card/155.jpg",
  "card/156.jpg");

var meanings = new Array(
  "Ace of Cups, called the Root of the Powers of Water. House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.",
  
  "II of Cups. Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.",
  
  "III of Cups, The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing",
  
  "IV of Cups. Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure. ",
  
  "V of Cups. It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.",
  
  "VI of Cups. A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct. ",
  
  "VII of Cups. Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.",
  
  "VIII of Cups.  The card speaks for itself on the surface, but other readings are entirely antithetical--giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence--either for good or evil.",
  
  "IX of Cups.  Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
  
  "X of Cups. Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent.",
  
  "Page of Cups. Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business. ",
  
  "Knight of Cups. Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.",
  
  "Queen of Cups. Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.", 
  
  "King of Cups. Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence",
  
  "Ace of Pentacles. Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.",
  
  "II of Pentacles. On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment",
  
  "III of Pentacles.  Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.",
  
  "IV of Pentacles. The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.",
  
  "V of Pentacles. The card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.",
  
  "VI of Pentacles.  Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.",
  
  "VII of Pentacles.  These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.",
  
  "VIII of Pentacles. Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage",
  
  "IX of Pentacles.  Prudence, safety, success, accomplishment, certitude, discernment.",
  
  "X of Pentacles. Gain, riches; family matters, archives, extraction, the abode of a family.",
  
  "Page of Pentacles. Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.",
  
  "Knight of Pentacles. Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.",
  
  "Queen of Pentacles.  Opulence, generosity, magnificence, security, liberty.",
  
  "King of Pentacles. Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.",
  
  "O The Fool. Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
  
  "I The Magician. Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
  
  "II The High Priestess. -Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
  
  "III The Empress. Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance. ",
  
  "IV The Emperor. Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.",
  
  "V The Hierophant. Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
  
  "VI The Lovers. Attraction, love, beauty, trials overcome.",
  
  "VII The Chariot. Succour, providence also war, triumph, presumption, vengeance, trouble.",
  
  "VIII Strength. Power, energy, action, courage, magnanimity; also complete success and honours.",
  
  "IX The Hermit. Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.",
  
  "X Wheel of Fortune. Destiny, fortune, success, elevation, luck, felicity.",
  
  "XI Justice. Equity, rightness, probity, executive; triumph of the deserving side in law.",
  
  "XII The Hanged Man. Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.",
  
  "XIII Death.End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.",
  
  "XIV Temperance. Economy, moderation, frugality, management, accommodation. ",
  
  "XV The Devil. Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.",
  
  "XVI The Tower. Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe. ",
  
  "XVII The Star. Loss, theft, privation, abandonment; another reading says-hope and bright prospects.",
  
  "XVIII The Moon. Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.",
  
  "XIX The Sun. Material happiness, fortunate marriage, contentment.",
  
  "XX The Last Judgment. Change of position, renewal, outcome. Another account specifies total loss though lawsuit.",
  
  "XXI The World. Assured success, recompense, voyage, route, emigration, flight, change of place.",
  
  "Ace of Swords.  Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.",

  "II of Swords. Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.",
  
  "III of Swords.  Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.",
  
  "IV of Swords. Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin. It is these last that have suggested the design.",
  
  "V of Swords. Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.",
  
  "VI of Swords. Journey by water, route, way, envoy, commissionary, expedient.",
  
  "VII of Swords. Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.",
  
  "VIII of Swords. Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.",
  
  "King of Wands.  Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.",
  
  "IX of Swords. Death, failure, miscarriage, delay, deception, disappointment, despair.",
  
  "X of Swords. Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.",
  
  "Page of Swords. Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
  
  "Knight of Swords. Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.",
  
  "Queen of Swords. Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.",
  
  "King of Swords. Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.",
  
  "Ace of Wands. Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.",
  
  "II of Wands. Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth.",
  
  "III of Wands. He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifiesable co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.",
  
  "IV of Wands. They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.",
  
  "V of Wands. Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.",
  
  "VI of Wands. The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth.",
  
  "VII of Wands.  It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.",
  
  "VIII of Wands. Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.",
  
  "IX of Wands. The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.",
  
  "X of Wands.  A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss",
  
  "Page of Wands. Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
  
  "Knight of Wands. Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.",
  
  "Queen of Wands. A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.",


//reversed cards


  "Ace of Cups, called the Root of the Powers of Water. House of the false heart, mutation, instability, revolution.",
  
  "II of Cups. Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.",
  
  "III of Cups. Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.",
   
  "IV of Cups. Novelty, presage, new instruction, new relations.",
  
  "V of Cups. News, alliances, affinity, consanguinity, ancestry, return, false projects.",
  
  "VI of Cups. The future, renewal, that which will come to pass presently.",
  
  "VII of Cups. Desire, will, determination, project.",
  
  "VIII of Cups.  Great joy, happiness,feasting.",
  
  "IX of Cups. Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
  
  "X of Cups. Repose of the false heart, indignation, violence.",
  
  "Page of Cups. Taste, inclination, attachment, seduction, deception, artifice.",
  
  "Knight of Cups. Trickery, artifice, subtlety, swindling, duplicity, fraud.",
  
  "Queen of Cups. The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity", 
  
  "King of Cups. Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.",
  
  "Ace of Pentacles. The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not.",
  
  "II of Pentacles. Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.",
  
  "III of Pentacles. Mediocrity, in work and otherwise, puerility, pettiness, weakness.",
  
  "IV of Pentacles. Suspense, delay, opposition.",
  
  "V of Pentacles. Disorder, chaos, ruin, discord, profligacy.",
  
  "VI of Pentacles. Desire, cupidity, envy, jealousy, illusion",
  
  "VII of Pentacles.  Cause for anxiety regarding money which it may be proposed to lend.",
  
  "VIII of Pentacles. Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.",
  
  "IX of Pentacles. Roguery, deception, voided project, bad faith.",
  
  "X of Pentacles. Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.",
  
  "Page of Pentacles. Prodigality, dissipation, liberality, luxury; unfavourable news.",
  
  "Knight of Pentacles. Inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.",
  
  "Queen of Pentacles. Evil, suspicion, suspense, fear, mistrust.",
  
  "King of Pentacles. Vice, weakness, ugliness, perversity, corruption, peril.",
  
  "O The Fool. Negligence, absence, distribution, carelessness, apathy, nullity, vanity.",
  
  "I The Magician. Physician, Magus, mental disease, disgrace, disquiet.",
  
  "II The High Priestess. Passion, moral or physical ardour, conceit, surface knowledge.",
  
  "III The Empress. Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
  
  "IV The Emperor. Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.",
  
  "V The Hierophant.  Society, good understanding, concord, overkindness, weakness.",
  
  "VI The Lovers. Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
  
  "VII The Chariot. Riot, quarrel, dispute, litigation, defeat.",
  
  "VIII Strength. Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
  
  "IX The Hermit. Concealment, disguise, policy, fear, unreasoned caution.",
  
  "X Wheel of Fortune. Increase, abundance, superfluity.",
  
  "XI Justice.  Law in all its departments, legal complications, bigotry, bias, excessive severity.",
  
  "XII The Hanged Man. Selfishness, the crowd, body politic.",
  
  "XIII Death. Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
  
  "XIV Temperance. Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.",
  
  "XV The Devil. Evil fatality, weakness, pettiness, blindness.",
  
  "XVI The Tower. According to one account, the same in a lesser degree: misery, disress, indigence, adversity, calamity, disgrace, deception, ruin, also oppression, imprisonment, tyranny. It is a card in particular of unforseen catastrophe.",
  
  "XVII The Star. Arrogance, haughtiness, impotence.",
  
  "XVIII The Moon. Instability, inconstancy, silence, lesser degrees of deception and error.",
  
  "XIX The Sun. Material happiness, fortunate marriage, contentment- in a lesser sense.",
  
  "XX The Last Judgment. Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
  
  "XXI The World. Inertia, fixity, stagnation, permanence.",
  
  "Ace of Swords. The same---triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling---but the results are disastrous; another account says--conception, childbirth, augmentation, multiplicity.",

  "II of Swords. Imposture, falsehood, duplicity, disloyalty.",
  
  "III of Swords. Mental alienation, error, loss, distraction, disorder, confusion.",
  
  "IV of Swords. Wise administration, circumspection, economy, avarice, precaution, testament.",
  
  "V of Swords. Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these, burial and obsequies.",
  
  "VI of Swords. Declaration, confession, publicity; one account says that it is a proposal of love.",
  
  "VII of Swords. Good advice, counsel, instruction, slander, babbling.",
  
  "VIII of Swords. Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality",
  
  "King of Wands. Good, but severe; austere, yet tolerant",
  
  "IX of Swords. Imprisonment, suspicion, doubt, reasonable fear, shame.",
  
  "X of Swords. Advantage, profit, success, favour, but none of these are permanent; also power and authority.",
  
  "Page of Swords. More evil side of these qualities---authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging; what is unforeseen, unprepared state; sickness is also intimated.",
  
  "Knight of Swords. Imprudence, incapacity, extravagance.",
  
  "Queen of Swords. Malice, bigotry, artifice, prudery, bale, deceit.",
  
  "King of Swords. Cruelty, perversity, barbarity, perfidy, evil intention.",
  
  "Ace of Wands. Fall, decadence, ruin, perdition, to perish also a certain clouded joy.",
  
  "II of Wands. Surprise, wonder, enchantment, emotion, trouble, fear.",
  
  "III of Wands. The end of troubles, suspension or cessation of adversity, toil and disappointment.",
  
  "IV of Wands. The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.",
  
  "V of Wands. Litigation, disputes, trickery, contradiction.",
  
  "VI of Wands. Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.",
  
  "VII of Wands. Perplexity, embarrassments, anxiety. It is also a caution against indecision.",
  
  "VIII of Wands. Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.",
  
  "IX of Wands.  Obstacles, adversity, calamity.",
  
  "X of Wands.  Contrarieties, difficulties, intrigues, and their analogies.",
  
  "Page of Wands. Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
  
  "Knight of Wands. Rupture, division, interruption, discord.",
  
  "Queen of Wands. Good, economical, obliging, serviceable. Signifies also--but in certain positions and in the neighbourhood of other cards tending in such directions--opposition, jealousy, even deceit and infidelity."

)

function tellFortune() {
  var randomNum = Math.floor(Math.random() * myCard.length);
  document.getElementById("myFortune").src = myCard[randomNum];
  document.getElementById("words").innerHTML = meanings[randomNum];
  //var matchingDesc = meanings[randomNum];
}

function showHideDiv(ele) {
  var srcElement = document.getElementById(ele);
  if (srcElement !=null) {
    if (srcElement.style.display == "block") {
      srcElement.style.display = 'none';
    } else {
      srcElement.style.display = 'block';
    }
    return false;
  }
}