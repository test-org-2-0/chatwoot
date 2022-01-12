const totalMessageHeight = (total, element) => {
  return total + element.scrollHeight;
};

export const calculateScrollTop = (
  conversationPanelHeight,
  parentHeight,
  relevantMessages
) => {
  // add up scrollHeight of a `relevantMessages`
  const combinedMessageScrollHeight = [...relevantMessages].reduce(
    totalMessageHeight,
    0
  );
  return (
    conversationPanelHeight - combinedMessageScrollHeight - parentHeight / 2
  );
};
