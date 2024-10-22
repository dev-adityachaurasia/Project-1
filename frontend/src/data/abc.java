import java.util.ArrayList; 

import java.util.List; 

public class Agnes { 
public static void main(String[] args) { 
int[] data = {18, 22, 25, 27, 42, 43}; 
List<List<Integer>> clusters = new ArrayList<>(); 

for (int point : data) { 

List<Integer> cluster = new ArrayList<>(); 

cluster.add(point); 

clusters.add(cluster); 

} 

int n = data.length; 

int[][] proximityMatrix = new int[n][n]; 

for (int i = 0; i < n; i++) { 

for (int j = i + 1; j < n; j++) { 

proximityMatrix[i][j] = Math.abs(data[i] - data[j]); 

proximityMatrix[j][i] = proximityMatrix[i][j]; 

} 

} 

System.out.println("Initial clusters: " + clusters); 

System.out.println("Initial proximity matrix:"); 

printProximityMatrix(proximityMatrix); 

while (clusters.size() > 1) { 

int minDistance = Integer.MAX_VALUE; 

int clusterAIndex = 0; 

int clusterBIndex = 1; 

for (int i = 0; i < clusters.size(); i++) { 

for (int j = i + 1; j < clusters.size(); j++) { 

int distance = Math.abs(clusters.get(i).get(0) - clusters.get(j).get(0)); 

if (distance < minDistance) { 

minDistance = distance; 

clusterAIndex = i; 

clusterBIndex = j; 

} 

} 

} 

System.out.println("Merging clusters: " + clusters.get(clusterAIndex) + " and " + 

clusters.get(clusterBIndex)); 

clusters.get(clusterAIndex).addAll(clusters.get(clusterBIndex)); 

clusters.remove(clusterBIndex); 

System.out.println("Updated clusters: " + clusters); 

} 

} 

private static void printProximityMatrix(int[][] matrix) { 

for (int[] row : matrix) { 

for (int value : row) { 

System.out.print(value + " "); 

} 

System.out.println(); 

} 

System.out.println(); 

} 

} 