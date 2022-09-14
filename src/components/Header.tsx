/**
 * Header.tsx
 * Renders the app screens Header
 */

import React, { memo } from 'react'
import { Text, View } from 'react-native'

// Styling
import styles from '../styles/appStyles'

// Interfaces
interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({
  title
}) => {
  return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
  )
}

export default memo(Header)
