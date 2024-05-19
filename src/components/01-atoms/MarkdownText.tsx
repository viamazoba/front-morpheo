import React, { FC } from "react";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Importa los estilos de KaTeX

type MarkdownTextInterface = {
    classContainer?: string;
    textContainer: string;
}

export const MarkdownText: FC<MarkdownTextInterface> = ({
    classContainer,
    textContainer = 'Este es el texto **markdown**'
}) => {
    const text = `${textContainer}`;
    return(
        <div className={`${classContainer}`}>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            >
                {text}
            </ReactMarkdown>
        </div>
    )
}