import { Text } from '@tuval/forms';

export const TitleText = (value) => (
    Text(value)
        .fontSize(30)
        .fontFamily('Ubuntu,sans-serif')
        .fontWeight('700')
        .lineHeight('1.1')
)