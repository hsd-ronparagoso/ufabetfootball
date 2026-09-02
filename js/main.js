(() => {
  'use strict';

  /* ---------------------------------------------------------------------
   * Data (content ported from the football content brief)
   * ------------------------------------------------------------------- */

  const MATCHES = [
    { a: 'Ashworth United', b: 'Kestrel City', score: '1 - 0', live: true, status: 'Live', time: "62'", odds: '-130', fav: 'Ashworth United favored', stats: '58% / 41% possession · 6 / 3 shots · 1 yellow' },
    { a: 'Northgate Athletic', b: 'Sabre Rovers', score: '0 - 0', live: false, status: 'Today, 8:00 PM', time: 'Not started', odds: '-110', fav: 'Northgate Athletic favored', stats: '—' },
    { a: 'Continental FC', b: 'Harborline SC', score: '2 - 2', live: true, status: 'Live', time: "87'", odds: '+220', fav: 'Draw favored', stats: '47% / 53% possession · 9 / 8 shots · 2 yellow, 1 red' }
  ];

  const S = (n, t, d) => ({ n, t, d });
  const BASE = [
    S(1, 'Create an account', 'Register on UFABET by providing basic personal information and completing the identity verification process required for access. Activation finalizes shortly after documents are submitted.'),
    S(2, 'Deposit funds', 'Add funds to the account using a supported payment method, such as bank transfer or e-wallet, to establish a wagering balance. Confirm that the deposit is reflected correctly before proceeding.'),
    S(3, 'Navigate to the football betting section', 'Locate the football category from the sports menu to view all scheduled matches, including league fixtures and international tournaments. Filter by competition or match day to narrow the selection.'),
    S(4, 'Select a football match', 'Choose a specific fixture from the available listings, reviewing team form, head-to-head history, and current odds before proceeding. Compare multiple fixtures if uncertain about which match offers the best value.'),
    S(5, 'Choose a bet type', 'Pick from match-winner, handicap, over/under, both teams to score, correct score, or accumulator markets depending on the desired approach. Each market carries different risk and payout structures worth reviewing beforehand.'),
    S(6, 'Place your bet', 'Enter the stake amount and confirm the selection to lock in the wager ahead of kickoff. Review the bet slip carefully before final submission.'),
    S(7, 'Monitor the match and bet', 'Track the scoreline and live odds movement throughout the match, particularly when in-play markets remain active. Adjust future wagers based on observed momentum shifts.'),
    S(8, 'Withdraw winnings', 'Submit a withdrawal request through a supported payment channel once the match concludes and winnings post to the account. Processing times vary depending on the method selected.')
  ];
  const variant = (over) => BASE.map((s, i) => (over[i] ? Object.assign({}, s, over[i]) : s));

  const HOW = [
    { label: 'Football', title: 'How to Bet on Football Online?', steps: BASE },
    { label: 'Premier League', title: 'How to Bet on Premier League Football?', steps: variant([
      { d: 'Sign up on UFABET by entering accurate personal details and completing the identity checks required to unlock full platform access for Premier League betting. Approval generally arrives within a short window once those checks are clear.' },
      { d: 'Fund the account through an accepted payment channel, such as an e-wallet or bank transfer, to cover the intended Premier League wager. Double-check that the balance updates before moving forward.' },
      { d: 'Open the sports menu and filter directly for Premier League fixtures, distinguishing marquee weekend matchups from midweek cup ties. Verify the correct kickoff time appears before proceeding further.' },
      { d: "Browse the Premier League schedule and settle on a specific fixture, weighing each club's recent league form and squad news against the posted odds. Cross-check the headline fixture against other matches on the same match day for better value." },
      { d: 'Decide between match-winner, handicap, over/under, or accumulator options based on how confident the selection feels for that particular Premier League fixture. Payout structures shift noticeably depending on which market gets selected.' },
      { d: 'Type in the stake and finalize the pick before kickoff, locking in the terms shown on the bet slip. A final read-through of the slip helps catch any entry mistakes.' },
      { d: "Follow live scoring and shifting in-play prices as the Premier League fixture unfolds, noting how each side's tactics change across halves. Use those observations to inform any additional live wagers." },
      { d: 'Request a payout through a supported method once the match ends and settled funds appear in the account balance, closing out the Premier League betting cycle. Turnaround speed depends on the specific withdrawal channel chosen.' }
    ]) },
    { label: 'La Liga', title: 'How to Bet on La Liga Football?', steps: variant([
      { d: "Complete UFABET's registration form with valid personal information and submit the documents needed to verify identity for La Liga betting. Confirmation follows soon after those documents are reviewed." },
      { d: 'Load the account balance using a supported method, such as a bank transfer or e-wallet, in an amount appropriate for the intended La Liga wager. Confirm the funds appear before selecting any matches.' },
      { d: "Head to the sports menu and locate the La Liga listings that cover every round of Spain's top division. Confirm the desired match date falls within the current fixture round." },
      { d: "Pick a fixture from the La Liga schedule, considering how each side's home or away form and recent results affect the matchup. Balance stronger favorites with higher-value underdogs when shaping a combined slip." },
      { d: 'Add match-winner, handicap, or over/under selections tied to the chosen La Liga fixture, keeping the payout structure in view. Remove or swap selections if the overall risk feels unbalanced.' },
      { d: 'Review the bet slip, confirm the total stake, and submit the wager before kickoff. A careful final check prevents mismatched selections from slipping through.' },
      { d: 'Track the fixture as results come in, noting how goals and cards affect the live odds throughout the ninety minutes. Note how an early goal affects the market for the remainder of the match.' },
      { d: 'Request a payout through a supported channel to close out the completed La Liga ticket once the match settles. Processing time depends on which withdrawal method gets selected.' }
    ]) },
    { label: 'Serie A', title: 'How to Bet on Serie A Football?', steps: variant([
      { d: 'Provide the personal details UFABET requires during sign-up and submit valid identification to clear the verification stage before Serie A betting becomes available. The account unlocks shortly after that review finishes.' },
      { d: 'Transfer money into the account through a supported channel, such as an e-wallet or bank transfer, sized for the intended Serie A wager. Verify the updated balance before continuing further.' },
      { d: 'Search the sports menu for Serie A listings, separating scheduled league rounds from Coppa Italia fixtures on the platform. Confirm the correct match week loads before moving forward.' },
      { d: "Scroll through the Serie A lineup and settle on a fixture, taking note of each club's defensive record and recent scoring trends against the listed odds. Weigh the marquee fixture against other matches for stronger value." },
      { d: 'Select match-winner, handicap, over/under, or accumulator markets suited to the chosen Serie A fixture, factoring in how tactically disciplined Italian sides tend to produce lower-scoring games. Review each market\'s payout terms before finalizing a choice.' },
      { d: 'Input the stake and confirm the selection ahead of kickoff, locking in the odds displayed at the time of submission. Recheck the slip once more before sending it through.' },
      { d: 'Watch the Serie A fixture unfold half by half, paying attention to live price shifts as tactical adjustments become apparent. Factor those shifts into any additional in-play wagers placed during the match.' },
      { d: 'Once the Serie A fixture concludes and settled funds land in the account, submit a withdrawal through a supported payment method to close out the betting cycle. Timeframes for receiving the payout depend on the channel chosen.' }
    ]) },
    { label: 'Bundesliga', title: 'How to Bet on Bundesliga Football?', steps: variant([
      { d: 'Fill out the UFABET sign-up form with correct personal information and submit the required identification before accessing Bundesliga markets. The review process generally clears within a short timeframe.' },
      { d: 'Move money into the account through an accepted method, such as a bank transfer or e-wallet, matched to the intended Bundesliga wager. Check that the balance reflects the deposit before proceeding.' },
      { d: 'Browse the sports menu for the schedule, separating top-flight fixtures from other listed German football categories. Confirm the correct match day and lineup before continuing.' },
      { d: "Review the Bundesliga fixture list and choose a specific match, examining each side's attacking output and recent results against the posted odds. Compare the headline fixture with supporting matches for potential value." },
      { d: 'Pick match-winner, handicap, over/under, or accumulator markets suited to the selected Bundesliga fixture, considering how high-scoring German league games tend to play out compared with other leagues. Review the payout terms tied to each option beforehand.' },
      { d: 'Enter the stake and confirm the wager before kickoff, securing the odds displayed at submission. Give the bet slip one more check before sending it through.' },
      { d: "Follow the Bundesliga fixture as it plays out, tracking live odds shifts alongside each half's scoring. Use those in-match patterns to guide any further live wagers placed during the broadcast." },
      { d: 'Request a payout through a supported method once the Bundesliga fixture ends and settled funds appear in the account balance. The time needed to receive funds depends on the withdrawal channel selected.' }
    ]) },
    { label: 'Ligue 1', title: 'How to Bet on Ligue 1 Football?', steps: variant([
      { d: 'Complete the UFABET sign-up process with valid personal information and submit the documents needed to pass identity verification ahead of Ligue 1 betting. Access usually opens up shortly after that step clears.' },
      { d: 'Add money to the account through a supported channel, such as an e-wallet or bank transfer, sized for the intended Ligue 1 wager. Confirm the balance reflects the deposit before continuing.' },
      { d: 'Check the sports menu for the weekly Ligue 1 listings, distinguishing that competition from other football categories available on the platform. Confirm the current match week\'s fixtures appear before moving on.' },
      { d: "Look through the Ligue 1 lineup and pick a specific fixture, weighing each club's recent form and squad depth against the listed odds. Compare mid-table matchups against the marquee fixture for possible value." },
      { d: 'Select match-winner, handicap, over/under, or accumulator markets for the chosen Ligue 1 fixture, keeping in mind that one dominant club can carry less predictable form for underdog opponents. Review the terms attached to each market beforehand.' },
      { d: 'Type in the stake and confirm the selection ahead of kickoff, locking in the odds shown at submission. Look over the slip once more before finalizing it.' },
      { d: "Track the Ligue 1 fixture half by half, noting how live pricing shifts as each side's performance unfolds. Apply those observations to any further in-play wagers placed during the match." },
      { d: 'Submit a withdrawal through a supported payment method once the Ligue 1 fixture wraps up and the funds settle in the account. Payout speed depends on the selected channel.' }
    ]) }
  ];

  const EVENTS = [
    { name: 'FIFA World Cup', def: 'The FIFA World Cup represents the pinnacle of international football, contested every four years between national teams that have progressed through regional qualification.', format: 'Group stage into a single-elimination knockout bracket, held every four years', min: '$1', max: '$50,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Both teams to score', 'Correct score', 'Tournament outright'], cta: 'Bet on the FIFA World Cup now on UFABET' },
    { name: 'UEFA European Championship (Euros)', def: "The UEFA European Championship brings together the continent's top national teams every four years in a tournament format mirroring the World Cup's group-and-knockout structure.", format: 'Group stage into knockout bracket, every four years', min: '$1', max: '$45,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Both teams to score', 'Accumulator'], cta: 'Bet on the Euros now on UFABET' },
    { name: 'Copa América', def: "Copa América is South America's premier international tournament, featuring the continent's national teams alongside occasional guest nations from outside the region.", format: 'Group stage into a knockout bracket, held every two to four years', min: '$1', max: '$35,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Correct score'], cta: 'Bet on Copa America now on UFABET' },
    { name: 'CAF Africa Cup of Nations (AFCON)', def: 'The CAF Africa Cup of Nations is the leading international football tournament across Africa, contested by national teams representing every region of the continent.', format: 'Group stage into a knockout format, rotating multi-year cycle', min: '$1', max: '$25,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Accumulator'], cta: 'Bet on AFCON now on UFABET' },
    { name: 'AFC Asian Cup', def: "The AFC Asian Cup is Asia's top international football competition, bringing together national teams from across the continent's football confederation.", format: 'Group-and-knockout structure, similar to other continental championships', min: '$1', max: '$20,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on the AFC Asian Cup now on UFABET' },
    { name: 'CONCACAF Gold Cup', def: 'The CONCACAF Gold Cup is the premier international tournament for North America, Central America, and the Caribbean, featuring national teams from the CONCACAF confederation.', format: 'Biennial cycle through group and knockout stages', min: '$1', max: '$18,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on the Gold Cup now on UFABET' },
    { name: 'UEFA Champions League', def: "The UEFA Champions League is Europe's top club competition, bringing together the highest-finishing teams from each domestic league across the continent.", format: 'League phase into a knockout bracket, concluding with a single-match final', min: '$1', max: '$50,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Both teams to score', 'Accumulator'], cta: 'Bet on the Champions League now on UFABET' },
    { name: 'UEFA Europa League', def: "The UEFA Europa League is Europe's secondary club competition, featuring teams that narrowly missed Champions League qualification alongside domestic cup winners.", format: 'League phase followed by knockout rounds, mirroring the Champions League', min: '$1', max: '$35,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Accumulator'], cta: 'Bet on the Europa League now on UFABET' },
    { name: 'UEFA Conference League', def: "The UEFA Conference League is Europe's third-tier club competition, giving smaller and mid-table domestic clubs a route into continental football.", format: 'Same league-then-knockout structure as its sister competitions', min: '$1', max: '$20,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on the Conference League now on UFABET' },
    { name: 'Copa Libertadores', def: "Copa Libertadores is South America's top club competition, contested annually by leading clubs from across the continent's domestic leagues.", format: 'Group stages into a knockout bracket, concluding with a two-legged final', min: '$1', max: '$25,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on Copa Libertadores now on UFABET' },
    { name: 'CONCACAF Champions Cup', def: "The CONCACAF Champions Cup is North and Central America's premier club tournament, bringing together domestic league and cup winners from across the region.", format: 'Knockout format from the round of 16 to the final', min: '$1', max: '$18,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on the CONCACAF Champions Cup now on UFABET' },
    { name: 'AFC Champions League Elite', def: "The AFC Champions League Elite is Asia's top club competition, featuring the continent's strongest domestic sides drawn from Asia's leading football nations.", format: 'League-then-knockout format', min: '$1', max: '$15,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on the AFC Champions League Elite now on UFABET' },
    { name: 'FIFA Club World Cup', def: 'The FIFA Club World Cup brings together continental club champions from around the globe to determine the top club side in the world.', format: 'Group and knockout stages across a condensed schedule', min: '$1', max: '$30,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Tournament outright'], cta: 'Bet on the FIFA Club World Cup now on UFABET' },
    { name: 'Premier League', def: "The Premier League is England's top domestic division, widely regarded as one of the most competitive and closely followed football leagues in the world.", format: 'Full home-and-away round-robin format across a single season', min: '$1', max: '$40,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Both teams to score', 'Accumulator'], cta: 'Bet on the Premier League now on UFABET' },
    { name: 'La Liga', def: "La Liga is Spain's top domestic division, home to some of the sport's most historically dominant clubs and technically demanding tactical styles.", format: 'Standard round-robin season format', min: '$1', max: '$35,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Accumulator'], cta: 'Bet on La Liga now on UFABET' },
    { name: 'Serie A', def: "Serie A is Italy's top domestic division, historically known for tactically disciplined, defensively organized football across its clubs.", format: 'Full round-robin schedule each season', min: '$1', max: '$30,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Correct score'], cta: 'Bet on Serie A now on UFABET' },
    { name: 'Bundesliga', def: "The Bundesliga is Germany's top domestic division, recognized for high-scoring, fast-paced matches and strong stadium attendance across the league.", format: 'Standard round-robin season', min: '$1', max: '$30,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Both teams to score'], cta: 'Bet on the Bundesliga now on UFABET' },
    { name: 'Ligue 1', def: "Ligue 1 is France's top domestic division, featuring a competitive mix of established clubs and emerging academies producing top attacking talent.", format: 'Full round-robin format each season', min: '$1', max: '$25,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on Ligue 1 now on UFABET' },
    { name: 'Liga MX', def: "Liga MX is Mexico's top domestic division, notable for its unique format that splits the season into two short tournaments, each concluding with its own playoff bracket. That short-tournament format shapes distinct odds movement compared with single-table leagues.", format: 'Two short tournaments per season, each with its own playoff bracket', min: '$1', max: '$15,000', markets: ['Match-winner', 'Handicap', 'Over/under'], cta: 'Bet on Liga MX now on UFABET' },
    { name: 'Major League Soccer (MLS)', def: 'Major League Soccer is the top domestic division in the United States and Canada, running a conference-based regular season followed by a playoff bracket.', format: 'Conference-based regular season plus a playoff bracket', min: '$1', max: '$15,000', markets: ['Match-winner', 'Handicap', 'Over/under', 'Accumulator'], cta: 'Bet on MLS now on UFABET' }
  ];

  const BETS = [
    { label: 'Match-Winner', title: 'What is Match-Winner Betting in Football?', body: 'Match-winner betting in football is a wager type that selects the outright result of a fixture, with three possible outcomes: a home win, an away win, or a draw. Odds for each outcome reflect relative team strength, recent form, and market betting activity, with favorites carrying shorter odds.', extra: 'A match-winner bet settles based on the result at the end of regulation time, including stoppage time but excluding extra time unless otherwise specified. The straightforward nature of match-winner betting makes it one of the most commonly selected markets among football bettors.', risk: 'Low', payout: 'Standard', who: 'New bettors' },
    { label: 'Handicap', title: 'What is Handicap Betting in Football?', body: 'Handicap betting in football is a wager type that applies a virtual goal advantage to the underdog or disadvantage to the favorite before the match begins, designed to level a perceived mismatch between two sides. A team given a -1 handicap must win by two or more goals for the bet to settle as a win, while a team given a +1 handicap can lose by one goal and still cover the spread.', extra: 'Bettors seeking better value on a heavily favored side, rather than accepting shorter match-winner odds, frequently turn to handicap markets.', risk: 'Medium', payout: 'Elevated', who: 'Value hunters' },
    { label: 'Half-Time', title: 'What is Half-Time Betting in Football?', body: 'Half-time betting in football is a wager type that predicts the result at the conclusion of the first 45 minutes of play, independent of how the match ultimately finishes. This market allows bettors to react to first-half tactics and early goals without waiting for the full-time result to settle a wager.', extra: "First-half markets often move differently from full-time odds based on a team's typical slow or fast starts.", risk: 'Medium', payout: 'Standard', who: 'Form readers' },
    { label: 'Over/Under', title: 'What is Over/Under Betting in Football?', body: 'Over/under betting in football is a wager type that predicts whether a match will produce more or fewer goals than a specified total set by the platform, commonly set at 2.5 goals. Casual bettors and those seeking a simpler alternative to correct score markets often favor over/under betting, since it requires only a directional call rather than an exact scoreline.', extra: "Fans of high-scoring attacking teams frequently bet over, while those following defensively organized sides often bet under, making familiarity with a team's scoring tendencies useful before placing a wager.", risk: 'Low–medium', payout: 'Standard', who: 'Casual bettors' },
    { label: 'BTTS', title: 'What Does Both Teams to Score Mean in Football Betting?', body: 'Both teams to score in football betting is a wager type that predicts whether each side will score at least one goal during the match, regardless of the final result. Bettors focused purely on attacking output, rather than the overall match outcome, frequently favor this market when facing two offensively capable sides.', extra: "Reviewing each team's recent scoring and defensive record helps, since a strong attack paired with a leaky defense often produces favorable conditions for this market.", risk: 'Medium', payout: 'Standard', who: 'Attack-focused bettors' },
    { label: 'Draw', title: 'What is Draw Betting in Football?', body: 'Draw betting in football is a wager type that predicts a match will end level after regulation time, a relatively common outcome compared with other sports. Bettors seeking value in tightly contested fixtures, particularly between evenly matched sides, turn to this market when neither team holds a clear tactical advantage.', extra: 'The advantage of draw betting lies in its solid payout relative to backing a clear favorite, since draws occur often enough in football to remain a regularly selected market.', risk: 'Medium', payout: 'Elevated', who: 'Value hunters' },
    { label: 'Correct Score', title: 'What is Correct Score Betting in Football?', body: 'Correct score betting in football is a wager type that predicts the exact final scoreline of a match, including the result for both teams. Bettors confident in a specific team\'s scoring pattern, rather than a general result prediction, favor this market for its higher reward potential.', extra: 'The advantage of correct score betting lies in its significantly higher payout compared with standard match-winner betting, though the added precision required makes it considerably harder to predict correctly.', risk: 'High', payout: 'High', who: 'Detail analysts' },
    { label: 'First Goalscorer', title: 'What is First Goalscorer Betting in Football?', body: "First goalscorer betting in football is a wager type that predicts which named player will score the opening goal of the match. Bettors who study a team's typical starting lineup, set-piece routines, and early-match attacking patterns often favor this market for its detailed, player-specific nature.", extra: 'The advantage of first goalscorer betting lies in its higher payout potential relative to team-based markets, since correctly identifying one specific player among an entire squad carries longer odds.', risk: 'High', payout: 'High', who: 'Detail analysts' },
    { label: 'Accumulator', title: 'What is an Accumulator Football Bet?', body: 'An accumulator football bet is a wager type that combines multiple individual selections across different matches into a single ticket, requiring every selection to win for the bet to pay out. Bettors seeking higher potential returns from a smaller stake favor accumulator betting, since combined odds across several fixtures multiply the overall payout compared with placing each selection separately.', extra: 'Structuring multi-match wagers effectively means balancing stronger favorites with occasional higher-value selections across the ticket.', risk: 'High', payout: 'Highest', who: 'Full-slate bettors' },
    { label: 'Single', title: 'What Does a Single Bet Mean in Football Betting?', body: 'A single bet in football betting is a wager type that places one selection on one fixture, settling independently based on that specific match outcome. Bettors preferring lower risk over the higher payout potential of combined tickets favor single betting, since the result of one match has no bearing on any other wager.', extra: 'This approach suits bettors prioritizing consistency over occasional large payouts.', risk: 'Low', payout: 'Standard', who: 'Risk-averse bettors' },
    { label: 'Parlay', title: 'What Does a Parlay Bet Mean in Football Betting?', body: 'A parlay bet in football betting is a wager type that links multiple selections into one combined ticket, requiring every included selection to win for any payout to occur. Bettors confident across an entire match day, rather than a single standout fixture, often turn to this market to capture value across multiple outcomes at once.', extra: 'Combined odds across each leg significantly increase potential returns compared with placing the same selections individually.', risk: 'High', payout: 'Highest', who: 'Multi-match bettors' }
  ];

  const SIDE_FAQ = [
    { q: 'Can betting markets change at half-time?', a: 'Yes. Half-time markets settle at the 45-minute mark, and new in-play markets become available for the second half based on the score and momentum at the break.' },
    { q: "What's the difference between an accumulator and a parlay?", a: 'Both link multiple selections into one ticket requiring every leg to win, multiplying the combined odds. Accumulator typically refers to combinations across separate matches, while parlay is often used for combinations across the same match day.' },
    { q: "What's the difference between single and combined bets?", a: 'A single bet settles independently on one fixture. A combined bet, whether an accumulator or parlay, requires every selection across multiple fixtures to win before any payout occurs.' }
  ];

  const FAQ = [
    { label: 'Deposit', items: [
      { q: 'How to deposit funds into an online football betting account?', a: 'Press the deposit menu, select transfer via bank, choose the linked account and enter the amount, read the terms and check all boxes, deposit the exact figure, then wait for automatic verification and press OK.' },
      { q: 'How to withdraw football betting winnings?', a: 'Press the withdraw menu, enter the amount and select a bank account, read the terms and check the box, then press Withdraw and wait for verification before pressing OK once the transfer finishes.' },
      { q: 'Welcome bonus', a: 'New accounts may qualify for a deposit-matched bonus applicable to football betting markets, applying on the first deposit made after registration.' },
      { q: 'Reload bonus', a: 'Existing accounts can receive bonus funds on subsequent deposits during promotional periods, often aligned with major tournament windows or seasonal promotions.' },
      { q: 'Event-specific promotions', a: 'Major tournaments and marquee league fixtures occasionally feature enhanced odds or special betting promotions in the lead-up to high-profile matches.' },
      { q: 'Referral bonus', a: "Inviting new users to the platform can earn bonus funds based on their activity, usually depending on the new user completing registration and making a qualifying deposit." }
    ] },
    { label: 'Limits', items: [
      { q: 'What is the minimum bet for online football betting?', a: 'The minimum varies by market and fixture. Standard match-winner and handicap markets carry low minimum stakes, keeping the platform accessible to bettors of all budgets. Reviewing the bet slip before confirmation displays the applicable minimum.' },
      { q: 'Are there football betting websites with no minimum bet?', a: 'No. Completely no-minimum sites do not exist, as platforms generally maintain a baseline minimum stake for account and transaction management. UFABET keeps its thresholds low across most standard markets.' },
      { q: 'Can you bet on football using a mobile phone?', a: "Yes. UFABET's mobile-optimized browser platform supports the full range of markets, including live and in-play options, with no dedicated app download required." },
      { q: 'Do football betting limits change by competition?', a: 'Yes. World championship and Champions League fixtures support up to $50,000 per wager, while smaller domestic and professional-tier matches cap between $15,000 and $25,000.' }
    ] },
    { label: 'Benefits', items: [
      { q: 'Convenience', a: 'Betting from any location removes the need to visit a physical venue for football wagers, allowing bets from home, work, or while traveling.' },
      { q: 'Market variety', a: 'Online platforms offer a broader range of betting markets than in-person alternatives — match-winner, handicap, over/under, and accumulator options in one place.' },
      { q: 'Live betting access', a: 'Real-time odds updates during a match allow reactive, in-play wagering opportunities as the match unfolds.' },
      { q: 'Faster transactions', a: 'Digital deposits and withdrawals process more quickly than traditional in-person payment methods, with funds available within minutes.' },
      { q: 'Detailed statistics access', a: "Online platforms provide team records and historical data to support informed betting decisions before placing a wager." },
      { q: 'Advantages over traditional betting', a: 'UFABET supports broader competition coverage, consistent live odds updates, full mobile browser functionality, minimum stakes as low as $1, and reliable payment processing compared with smaller sites.' },
      { q: 'Is online football betting better than in-person betting?', a: 'Yes, for bettors prioritizing convenience, market variety, and live betting access. In-play betting during a match remains far more practical online than through traditional in-person channels.' }
    ] },
    { label: 'Strategy', items: [
      { q: 'Research team statistics', a: 'Reviewing win rates, scoring averages, and recent form builds a stronger foundation for betting decisions than relying on reputation alone.' },
      { q: 'Assess tactical matchups', a: 'Comparing playing styles, such as possession-based sides against counter-attacking teams, helps predict likely match patterns.' },
      { q: 'Monitor squad news', a: "Significant injuries or suspensions to key players can materially affect a team's expected performance." },
      { q: 'Track recent form', a: "A team's last several matches frequently reveal patterns that a season-long table position can obscure." },
      { q: 'Diversify bet types', a: 'Combining match-winner, handicap, and over/under markets spreads risk across different outcome types.' },
      { q: 'How important are statistics and team analysis to betting?', a: 'Highly important — win-loss records, scoring rates, and performance against similarly styled opponents reveal patterns that inform realistic outcomes, consistently yielding more disciplined betting decisions than reputation alone.' },
      { q: 'How to analyze a football match before betting?', a: "Review each team's recent record, compare head-to-head history, examine squad news, review tactical setup, then check home and away form splits before placing a wager." },
      { q: 'How to minimize risks when betting on football?', a: 'Set fixed stake limits, review team statistics and form before every wager, avoid high-variance markets without research, diversify selections across matches, and avoid emotionally driven bets.' },
      { q: 'What are common mistakes to avoid?', a: 'Overvaluing reputation, ignoring squad news, chasing losses, skipping statistical research, and ignoring tactical matchups.' },
      { q: 'What are the best football betting tips?', a: 'Combine statistics with match footage, compare head-to-head history, diversify bet types, track squad rotation, and set a fixed betting budget before wagering.' },
      { q: 'Is online football betting legal?', a: "Yes, though legality depends entirely on the bettor's jurisdiction. UFABET operates within applicable licensing frameworks, but individual eligibility still depends on local laws." }
    ] },
    { label: 'Odds', items: [
      { q: 'Which football betting website offers the best odds?', a: 'UFABET maintains competitive pricing across international tournaments, continental club competitions, and every major domestic league, from the Premier League to Ligue 1.' },
      { q: 'What are football betting odds?', a: "The numerical expression of a team's implied probability of winning, shown as fractional, decimal, or moneyline formats, reflecting relative team strength and market activity." },
      { q: 'How do football betting odds work?', a: 'Moneyline odds display as positive or negative numbers, with negative values indicating favorites and positive values indicating underdogs or the draw. Favorites return smaller profit; underdogs return more.' },
      { q: 'How to read football betting odds?', a: 'Identify the format, locate the favorite and underdog, calculate the payout using that format\'s formula, compare across markets, then review odds movement over time before betting.' },
      { q: 'How are football betting odds calculated?', a: 'Through statistical modeling, team performance data, and betting market activity, continuously recalculated to stay aligned with the latest information before and during a match.' },
      { q: 'What factors affect football betting odds?', a: 'Recent form, head-to-head history, squad news, home or away advantage, and overall betting volume on a specific outcome, plus weather and pitch conditions immediately before kickoff.' }
    ] },
    { label: 'Live & Mobile', items: [
      { q: 'How does live football betting work?', a: 'Wagers are placed on a match as it unfolds in real time, with odds updating continuously based on goals, red cards, and shifts in momentum.' },
      { q: 'Which football betting websites work on mobile?', a: "UFABET supports full mobile functionality through browser access, without requiring a dedicated download, replicating the desktop experience for deposits and live betting." },
      { q: 'Is mobile football betting available 24/7?', a: 'Yes. Round-the-clock availability supports pre-match wagers at any time, live in-play betting across different time zones, and account access outside active match windows.' },
      { q: 'Can you place football bets before a match starts?', a: 'Yes, through standard pre-match markets. Pre-match odds reflect team form, historical data, and market activity leading up to the scheduled fixture.' },
      { q: 'Can you bet on football during a live match?', a: 'Yes, through in-play betting markets that update continuously as the fixture progresses, remaining active until the final whistle.' }
    ] }
  ];

  const REG_STEPS = [
    { n: 1, t: 'Access the registration page', d: 'Navigate to the sign-up section of the platform to begin account creation. The registration page loads directly from the homepage without additional navigation.' },
    { n: 2, t: 'Submit personal information', d: 'Enter accurate personal details, including full name, contact information, and date of birth, as required for account verification. Matching official records helps prevent delays.' },
    { n: 3, t: 'Verify identity', d: 'Upload the required identification documents to confirm eligibility for account activation. A clear, valid government-issued ID or passport significantly speeds up review.' },
    { n: 4, t: 'Confirm account details', d: 'Review submitted information for accuracy before finalizing the registration. Correcting errors at this stage avoids the need for resubmission.' },
    { n: 5, t: 'Activate the account', d: 'Wait for confirmation, delivered quickly, before accessing full platform features including football betting markets. Deposits, wagering, and live odds unlock immediately once activation completes.' }
  ];

  const REG_INFO = [
    { t: 'Full legal name', d: 'Matching official identification documents ensures smooth account verification and future withdrawal processing.' },
    { t: 'Contact details', d: 'A valid phone number and email address are required for account recovery, notifications, and two-factor verification on some devices.' },
    { t: 'Date of birth', d: 'Confirms the registrant meets the minimum legal age requirement for online betting.' },
    { t: 'Identification document', d: 'A government-issued ID or passport is used to verify identity during registration; a clear, unexpired copy speeds up review.' },
    { t: 'Payment method details', d: 'Bank account or e-wallet information allows funding to begin immediately after activation.' }
  ];

  const LOOK_FOR = [
    { t: 'Market variety', d: 'A strong platform offers match-winner, handicap, over/under, both teams to score, and accumulator markets across multiple leagues.' },
    { t: 'Odds competitiveness', d: "Consistently strong pricing across fixtures reflects a platform's commitment to bettor value." },
    { t: 'Live betting support', d: 'In-play markets that update in real time allow bettors to react to live match developments, such as a goal or red card.' },
    { t: 'Mobile compatibility', d: 'Smooth mobile browser or app performance supports betting access from any location without lag or crashes.' },
    { t: 'Secure payment processing', d: 'Reliable deposit and withdrawal methods protect account funds and support timely transactions.' }
  ];

  const CHOOSE_STEPS = [
    { n: 1, t: 'Compare available markets', d: 'Review match-winner, handicap, over/under, and accumulator coverage — limited options restrict flexibility when a specific approach is preferred.' },
    { n: 2, t: 'Check odds competitiveness', d: 'Small pricing differences across multiple wagers can add up significantly over time.' },
    { n: 3, t: 'Review payment options', d: 'A wider range of supported deposit and withdrawal channels reduces friction when funding or cashing out.' },
    { n: 4, t: 'Assess mobile accessibility', d: 'Laggy or unresponsive mobile performance can lead to missed opportunities in fast-moving in-play markets.' },
    { n: 5, t: 'Evaluate customer support', d: 'Slow or unhelpful support becomes especially costly when an issue arises during a live match.' }
  ];

  /* ---------------------------------------------------------------------
   * Helpers
   * ------------------------------------------------------------------- */

  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------------------------------------------------------------------
   * Mobile nav
   * ------------------------------------------------------------------- */

  function initMobileNav() {
    const toggle = $('[data-menu-toggle]');
    const nav = $('[data-mobile-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    $$('[data-close-menu]', nav).forEach((a) => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------------------------------------------------------------------
   * Register dialog
   * ------------------------------------------------------------------- */

  function initRegisterDialog() {
    const dialog = $('[data-register-dialog]');
    if (!dialog) return;
    $$('[data-open-register]').forEach((btn) => btn.addEventListener('click', () => dialog.showModal()));
    $$('[data-close-register]').forEach((btn) => btn.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  }

  /* ---------------------------------------------------------------------
   * Matches
   * ------------------------------------------------------------------- */

  function renderMatches() {
    const el = $('#matches-body');
    if (!el) return;
    const ball = (side) => `
      <span class="m-badge side-${side}" title="${side === 'home' ? 'Home' : 'Away'}" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="58%" height="58%" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9.2"/><path d="M12 7.2 15.8 10l-1.5 4.6h-4.6L8.2 10z" fill="currentColor" stroke="none"/><path d="M12 7.2V3.6M15.8 10l3.6-1.1M14.3 14.6l2.2 3.4M9.7 14.6l-2.2 3.4M8.2 10 4.6 8.9"/></svg>
      </span>`;
    el.innerHTML = MATCHES.map((m) => `
      <div class="m-row m-body-row${m.live ? ' is-live' : ''}" role="row">
        <div role="cell">
          <div class="m-badges">
            ${ball('home')}
            <span class="m-vs">VS</span>
            ${ball('away')}
          </div>
          <div class="m-teams"><span>${esc(m.a)}</span><span class="m-vs">VS</span><span>${esc(m.b)}</span><span class="m-score">${esc(m.score)}</span></div>
          <div class="dt-col m-meta">${m.live ? `<span class="m-live-dot">${esc(m.status)}</span>` : esc(m.status)} · ${esc(m.time)}</div>
        </div>
        <div class="dt-col" role="cell" style="font-size:15px;color:#cfc6b6">${esc(m.time)}</div>
        <div class="dt-col m-stats-line" role="cell">${esc(m.stats)}</div>
        <div class="m-odds-col" role="cell">
          <div class="m-odds">${esc(m.odds)}</div>
          <div class="m-fav">${esc(m.fav)}</div>
        </div>
        <div class="m-cta" role="cell">
          <button class="btn btn-primary">Bet Now</button>
        </div>
      </div>
    `).join('');
  }

  /* ---------------------------------------------------------------------
   * How to Bet tabs
   * ------------------------------------------------------------------- */

  function renderHow() {
    const tabsEl = $('#how-tabs');
    const panelsEl = $('#how-panels');
    if (!tabsEl || !panelsEl) return;

    let howIndex = 0;

    tabsEl.innerHTML = HOW.map((t, i) => `<button class="tab-btn${i === howIndex ? ' active-gold' : ''}" data-how-tab="${i}">${esc(t.label)}</button>`).join('');

    panelsEl.innerHTML = HOW.map((how, i) => `
      <div class="how-panel" data-how-panel="${i}"${i === howIndex ? '' : ' hidden'}>
        <h3 class="h3-gold">${esc(how.title)}</h3>
        <div class="steps-grid">
          ${how.steps.map((s) => `
            <div class="step-card">
              <div class="step-num">${s.n}</div>
              <div class="step-title">${esc(s.t)}</div>
              <div class="step-desc">${esc(s.d)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    $$('[data-how-tab]', tabsEl).forEach((btn) => btn.addEventListener('click', () => {
      howIndex = Number(btn.dataset.howTab);
      $$('[data-how-tab]', tabsEl).forEach((b) => b.classList.toggle('active-gold', b === btn));
      $$('[data-how-panel]', panelsEl).forEach((p) => { p.hidden = Number(p.dataset.howPanel) !== howIndex; });
    }));
  }

  /* ---------------------------------------------------------------------
   * Events
   * ------------------------------------------------------------------- */

  function renderEvents() {
    const tabsEl = $('#event-tabs');
    const panelsEl = $('#event-panels');
    if (!tabsEl || !panelsEl) return;

    let eventIndex = 0;

    tabsEl.innerHTML = EVENTS.map((e, i) => `
      <button class="tab-btn${i === eventIndex ? ' active-gold' : ''}" data-event-tab="${i}">
        <span class="event-tab-num">${String(i + 1).padStart(2, '0')}</span>${esc(e.name)}
      </button>
    `).join('');

    panelsEl.innerHTML = EVENTS.map((ev, i) => `
      <div class="event-detail" data-event-panel="${i}"${i === eventIndex ? '' : ' hidden'}>
        <h3 class="event-title">${esc(ev.name)}</h3>
        <p class="event-def">${esc(ev.def)}</p>
        <div class="event-stats">
          <div class="event-stat"><div class="event-stat-label">Format</div><div class="event-stat-val">${esc(ev.format)}</div></div>
          <div class="event-stat"><div class="event-stat-label">Minimum stake</div><div class="event-stat-val big">${esc(ev.min)}</div></div>
          <div class="event-stat"><div class="event-stat-label">Maximum stake</div><div class="event-stat-val big">${esc(ev.max)}</div></div>
        </div>
        <div class="markets-label">Markets available</div>
        <div class="market-tags">${ev.markets.map((mk) => `<span class="market-tag">${esc(mk)}</span>`).join('')}</div>
        <button class="btn btn-key btn-lg" style="margin-top:30px" data-open-register>${esc(ev.cta)}</button>
      </div>
    `).join('');

    $$('[data-event-tab]', tabsEl).forEach((btn) => btn.addEventListener('click', () => {
      eventIndex = Number(btn.dataset.eventTab);
      $$('[data-event-tab]', tabsEl).forEach((b) => b.classList.toggle('active-gold', b === btn));
      $$('[data-event-panel]', panelsEl).forEach((p) => { p.hidden = Number(p.dataset.eventPanel) !== eventIndex; });
    }));

    initRegisterDialogButtons();
  }

  /* ---------------------------------------------------------------------
   * Bet types / markets — labels jump to a full accordion of every market
   * ------------------------------------------------------------------- */

  function renderMarkets() {
    const tabsEl = $('#bet-tabs');
    const accEl = $('#bet-accordion');
    const faqEl = $('#round-faq');
    if (!tabsEl || !accEl || !faqEl) return;

    let openIndex = 0;

    tabsEl.innerHTML = BETS.map((b, i) => `<button class="tab-btn${i === openIndex ? ' active-gold' : ''}" data-bet-tab="${i}">${esc(b.label)}</button>`).join('');

    accEl.innerHTML = BETS.map((bet, i) => `
      <div class="accordion-item${i === openIndex ? ' open' : ''}" data-bet-item="${i}">
        <div class="accordion-head">
          <span class="accordion-t">${esc(bet.title)}</span>
          <span class="accordion-sign">${i === openIndex ? '−' : '+'}</span>
        </div>
        <div class="accordion-body">
          <p class="market-body">${esc(bet.body)}</p>
          <p class="market-body">${esc(bet.extra)}</p>
          <div class="market-facts">
            <div class="market-fact"><div class="market-fact-label">Risk</div><div class="market-fact-val">${esc(bet.risk)}</div></div>
            <div class="market-fact"><div class="market-fact-label">Payout potential</div><div class="market-fact-val">${esc(bet.payout)}</div></div>
            <div class="market-fact"><div class="market-fact-label">Best suited to</div><div class="market-fact-val">${esc(bet.who)}</div></div>
          </div>
        </div>
      </div>
    `).join('');

    faqEl.innerHTML = SIDE_FAQ.map((q) => `
      <div class="round-faq-item">
        <div class="round-faq-q">${esc(q.q)}</div>
        <div class="round-faq-a">${esc(q.a)}</div>
      </div>
    `).join('');

    function setOpen(i) {
      openIndex = i;
      $$('[data-bet-item]', accEl).forEach((item) => {
        const open = Number(item.dataset.betItem) === i;
        item.classList.toggle('open', open);
        $('.accordion-sign', item).textContent = open ? '−' : '+';
      });
      $$('[data-bet-tab]', tabsEl).forEach((b) => b.classList.toggle('active-gold', Number(b.dataset.betTab) === i));
    }

    $$('[data-bet-item]', accEl).forEach((item) => {
      $('.accordion-head', item).addEventListener('click', () => {
        const n = Number(item.dataset.betItem);
        setOpen(openIndex === n ? -1 : n);
      });
    });

    $$('[data-bet-tab]', tabsEl).forEach((btn) => btn.addEventListener('click', () => {
      const n = Number(btn.dataset.betTab);
      setOpen(n);
      $(`[data-bet-item="${n}"]`, accEl).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }));
  }

  /* ---------------------------------------------------------------------
   * FAQ / odds
   * ------------------------------------------------------------------- */

  function renderFaq() {
    const tabsEl = $('#faq-tabs');
    const panelsEl = $('#faq-panels');
    if (!tabsEl || !panelsEl) return;

    let faqIndex = 0;

    tabsEl.innerHTML = FAQ.map((f, i) => `<button class="tab-btn${i === faqIndex ? ' active-flat' : ''}" data-faq-tab="${i}">${esc(f.label)}</button>`).join('');

    panelsEl.innerHTML = FAQ.map((f, i) => `
      <div class="faq-grid" data-faq-panel="${i}"${i === faqIndex ? '' : ' hidden'}>
        ${f.items.map((it) => `
          <div class="faq-card">
            <h3 class="faq-q">${esc(it.q)}</h3>
            <p class="faq-a">${esc(it.a)}</p>
          </div>
        `).join('')}
      </div>
    `).join('');

    $$('[data-faq-tab]', tabsEl).forEach((btn) => btn.addEventListener('click', () => {
      faqIndex = Number(btn.dataset.faqTab);
      $$('[data-faq-tab]', tabsEl).forEach((b) => b.classList.toggle('active-flat', b === btn));
      $$('[data-faq-panel]', panelsEl).forEach((p) => { p.hidden = Number(p.dataset.faqPanel) !== faqIndex; });
    }));
  }

  /* ---------------------------------------------------------------------
   * Registration accordion + info + choose steps
   * ------------------------------------------------------------------- */

  let openRegStep = 1;
  function renderRegSteps() {
    const el = $('#reg-steps');
    if (!el) return;
    el.innerHTML = REG_STEPS.map((r) => {
      const isOpen = openRegStep === r.n;
      return `
        <div class="accordion-item${isOpen ? ' open' : ''}" data-reg-step="${r.n}">
          <div class="accordion-head">
            <span class="accordion-n">0${r.n}</span>
            <span class="accordion-t">${esc(r.t)}</span>
            <span class="accordion-sign">${isOpen ? '−' : '+'}</span>
          </div>
          <div class="accordion-body">${esc(r.d)}</div>
        </div>
      `;
    }).join('');

    $$('[data-reg-step]', el).forEach((item) => item.addEventListener('click', () => {
      const n = Number(item.dataset.regStep);
      openRegStep = openRegStep === n ? 0 : n;
      renderRegSteps();
    }));
  }

  function renderRegInfo() {
    const el = $('#reg-info');
    if (!el) return;
    el.innerHTML = REG_INFO.map((i) => `
      <div class="stacked-item">
        <div class="stacked-title">${esc(i.t)}</div>
        <div class="stacked-desc">${esc(i.d)}</div>
      </div>
    `).join('');
  }

  function renderLookFor() {
    const el = $('#look-for');
    if (!el) return;
    el.innerHTML = LOOK_FOR.map((i) => `
      <div class="stacked-item">
        <div class="stacked-title">${esc(i.t)}</div>
        <div class="stacked-desc">${esc(i.d)}</div>
      </div>
    `).join('');
  }

  function renderChooseSteps() {
    const el = $('#choose-steps');
    if (!el) return;
    el.innerHTML = CHOOSE_STEPS.map((c) => `
      <div class="numbered-item">
        <span class="numbered-badge">${c.n}</span>
        <div>
          <span class="numbered-title">${c.n}. </span>
          <span class="numbered-desc">${esc(c.t)}. ${esc(c.d)}</span>
        </div>
      </div>
    `).join('');
  }

  function initRegisterDialogButtons() {
    const dialog = $('[data-register-dialog]');
    if (!dialog) return;
    $$('[data-open-register]').forEach((btn) => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => dialog.showModal());
    });
  }

  /* ---------------------------------------------------------------------
   * Init
   * ------------------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initRegisterDialog();
    renderMatches();
    renderHow();
    renderEvents();
    renderMarkets();
    renderFaq();
    renderRegSteps();
    renderRegInfo();
    renderLookFor();
    renderChooseSteps();
  });
})();
