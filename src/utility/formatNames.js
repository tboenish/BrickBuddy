export const formatNames = (themeName) =>
{
    return themeName//Function to format all the theme names so they would match how they are formatted in my views dict.
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');


};