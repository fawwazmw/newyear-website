import React from 'react'

/**
 * ImageCard component for displaying an image with title and description
 *
 * @param {string} imageUrl - URL of the image to display
 * @param {string} altText - Alternative text for the image
 * @param {string} title - Title to display below the image
 * @param {string} description - Description text to display below the title
 * @returns {React.ReactElement}
 */
export const ImageCard = ({
                              // eslint-disable-next-line react/prop-types
                              imageUrl,
                              // eslint-disable-next-line react/prop-types
                              altText = "image",
                              // eslint-disable-next-line react/prop-types
                              title,
                              // eslint-disable-next-line react/prop-types
                              description
                          }) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg h-[36rem]">
            <div className="relative w-full h-[25rem]">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-2">
                <h2 className="mb-2 text-xl font-bold text-gray-800">
                    {title}
                </h2>
                <p className="text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ImageCard