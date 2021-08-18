 export const searchFilterFunction = (text,masterDataSource) => {

      const newData = masterDataSource.filter(function ({data,id}) {
        const itemData = data.title
          ? data.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return newData
  };