import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const Perfil = ({ fotos = [] }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header del Perfil */}
      <View style={styles.topBar}>
        <View style={styles.usernameRow}>
          <Text style={styles.username}>mkbhd</Text>
          <Ionicons name="checkmark-circle" size={16} color="#3897f0" style={{ marginLeft: 4 }} />
        </View>
      </View>
 
      <View style={styles.profileHeader}>
        <View style={styles.topRow}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: fotos[0]?.url || 'https://via.placeholder.com/90' }}
              style={styles.profileAvatar}
            />
          </View>
 
          {/* Estadisticas */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1,861</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4M</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>454</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>
 
        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text style={styles.bioName}>Marques Brownlee</Text>
          <Text style={styles.bioDescription}>i promise I won't overdo the filters.</Text>
          <Text style={styles.bioLink}>mkbhd.com</Text>
          <Text style={styles.followedBy}>Followed by lucjongsept</Text>
        </View>
 
        {/* Botones de Accion */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Following</Text>
            <Ionicons name="chevron-down" size={14} color="#000" style={{ marginLeft: 4 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-add-outline" size={16} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-horizontal" size={16} color="#000" />
          </TouchableOpacity>
        </View>
 
        {/* Historias destacadas */}
        <View style={styles.highlightsContainer}>
          <View style={styles.highlightItem}>
            <View style={styles.highlightCircle}>
              <Ionicons name="videocam" size={22} color="#000" />
            </View>
            <Text style={styles.highlightLabel}>BTS</Text>
          </View>
          <View style={styles.highlightItem}>
            <View style={[styles.highlightCircle, styles.highlightAvatar]}>
              <Image
                source={{ uri: fotos[1]?.url || 'https://via.placeholder.com/60' }}
                style={styles.highlightImage}
              />
            </View>
            <Text style={styles.highlightLabel}>Yhomo</Text>
          </View>
        </View>
      </View>
 
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
          <Ionicons name="grid" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="play-outline" size={22} color="#8e8e8e" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={22} color="#8e8e8e" />
        </TouchableOpacity>
      </View>
 
      {/* Grid de Publicaciones */}
      <View style={styles.gridContainer}>
        {fotos.map((foto) => (
          <TouchableOpacity key={foto.id} style={styles.photoItem}>
            <Image source={{ uri: foto.url }} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  profileHeader: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 20,
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#e0e0e0',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  statLabel: {
    fontSize: 13,
    color: '#000',
  },
  bioContainer: {
    marginTop: 12,
  },
  bioName: {
    fontSize: 14,
    fontWeight: '700',
  },
  bioDescription: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
  bioLink: {
    fontSize: 14,
    color: '#00376b',
    marginTop: 2,
  },
  followedBy: {
    fontSize: 13,
    color: '#8e8e8e',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 12,
  },
  followButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 7,
    backgroundColor: '#efefef',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  messageButton: {
    flex: 1,
    paddingVertical: 7,
    backgroundColor: '#efefef',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  iconButton: {
    width: 34,
    paddingVertical: 7,
    backgroundColor: '#efefef',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 16,
  },
  highlightItem: {
    alignItems: 'center',
  },
  highlightCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  highlightAvatar: {
    backgroundColor: '#e0e0e0',
  },
  highlightImage: {
    width: '100%',
    height: '100%',
  },
  highlightLabel: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabItemActive: {
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoItem: {
    width: '32.8%',
    aspectRatio: 1,
    marginBottom: 3,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
});
 
export default Perfil;
 