const formatDate = (date: Date | string): string =>
  new Date(date).toLocaleDateString('pt-BR');

export default formatDate;
