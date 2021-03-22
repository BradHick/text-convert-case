import capitalCase from './capitalCase';

const titleCase = (a) => {
  return (a = (a = (a = capitalCase(a)).replace(
    /\b(A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Da|Do|Das|Dos|As|Os|O|E|Em|De|Vs?\\.?|Via)\b/g,
    function (_) {
      return _.toLowerCase();
    }
  )).replace(
    /(?:([\\.\\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|da|do|de|das|dos|e|em|as|os|vs?\\.?|via)/g,
    capitalCase
  ));
};

export default titleCase;
