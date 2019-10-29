import React, { ReactNode, ReactElement } from 'react';

// components
import Paragraph from 'components/Shared/Text/Paragraph';
import Span from 'components/Shared/Text/Span';
import Heading1 from 'components/Shared/Text/Heading1';
import Heading2 from 'components/Shared/Text/Heading2';
import Heading3 from 'components/Shared/Text/Heading3';
import Heading4 from 'components/Shared/Text/Heading4';
import Heading5 from 'components/Shared/Text/Heading5';
import Heading6 from 'components/Shared/Text/Heading6';

type TextProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'span';
    children?: ReactNode;
};

export default ({ variant, children }: TextProps): ReactElement => {
    switch (variant) {
        case 'h1':
            return <Heading1>{children}</Heading1>;

        case 'h2':
            return <Heading2>{children}</Heading2>;

        case 'h3':
            return <Heading3>{children}</Heading3>;

        case 'h4':
            return <Heading4>{children}</Heading4>;

        case 'h5':
            return <Heading5>{children}</Heading5>;

        case 'h6':
            return <Heading6>{children}</Heading6>;

        case 'span':
            return <Span>{children}</Span>;

        case 'paragraph':
            return <Paragraph>{children}</Paragraph>;

        default:
            return <Paragraph>{children}</Paragraph>;
    }
};
