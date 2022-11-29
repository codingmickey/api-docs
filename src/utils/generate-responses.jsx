import getValueForParameter from './get-value-for-parameter';

const generateResponses = (responses) => {
  const items = responses
    .map((response) => {
      if (!response.schema) {
        return null;
      }

      const {
        schema: { properties, items },
      } = response;

      const props = properties || items?.properties;

      if (props) {
        return {
          label: `${response.status}`,
          language: 'json',
          content: `{
    ${Object.keys(props)
      .map((propertyName) => {
        const { type } = props[propertyName];

        return `${propertyName}: ${getValueForParameter(props[propertyName], type, propertyName)}`;
      })
      .join(',\n    ')}
}`,
        };
      }

      return null;
    })
    .filter((item) => !!item);

  return items;
};

export default generateResponses;
